import fetch from 'isomorphic-unfetch'

import config from 'core/config'
import { debounce } from 'utils/debounce'
import { I18N_BRAND, I18N_PROJECT } from './config'

type Metadata = {
  [key: string]: string
}

export type MissingTranslationEntry = {
  lang: string
  namespace: string
  key: string
  master: string
  metadata?: Metadata
}

const entryToKey = (entry: MissingTranslationEntry) =>
  `${entry.namespace}:${entry.key}`

export interface MissingTranslationReporterFetcherInterface {
  sendReport(lang: string, body: MissingTranslationEntry[]): Promise<any>
}

class MissingTranslatorReporterFetcher {
  async sendReport(lang: string, body: MissingTranslationEntry[]) {
    const baseUrl = config('TRANSLATION_SERVICE_BASEURL')
    const url = `${baseUrl}/api/${I18N_BRAND}/${I18N_PROJECT}/${lang}/translations/request`

    const req = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        keys: body,
      }),
    })
    return await req.json()
  }
}

export default class MissingTranslationReporter {
  REPORT_FAILURES_THRESHOLD = 5
  DEBOUNCE_TIME: number = 1000
  protected reportedKeys: { [key: string]: true } = {}
  protected toReport: { [key: string]: MissingTranslationEntry } = {}
  protected reportFailures: number = 0

  constructor(
    private fetcher: MissingTranslationReporterFetcherInterface = new MissingTranslatorReporterFetcher()
  ) {}

  report = (entry: MissingTranslationEntry) => {
    if (this.reportFailures >= this.REPORT_FAILURES_THRESHOLD) {
      // too many failures, not reporting
      return
    }

    const key = entryToKey(entry)
    if (this.reportedKeys[key]) {
      // already reported
      return
    }
    this.toReport[key] = entry
    this.sendReport()
  }

  private sendReport = debounce(async () => {
    const [keys, body] = this.generateReportBody()
    if (!body.length) {
      // there is nothing to report
      return
    }
    // console.log('reporting missing translations', body)

    try {
      await this.fetcher.sendReport(body[0].lang, body)
      this.onReportSuccess(keys)
    } catch (e) {
      this.onReportFailure()
    }
  }, this.DEBOUNCE_TIME)

  private onReportSuccess(keysReported: string[]) {
    keysReported.forEach((key) => {
      delete this.toReport[key]
      this.reportedKeys[key] = true
    })
  }

  private onReportFailure() {
    this.reportFailures++
  }

  private generateReportBody(): [string[], MissingTranslationEntry[]] {
    const keys = Object.keys(this.toReport)
    const body = keys.map((key) => this.toReport[key])
    return [keys, body]
  }
}
