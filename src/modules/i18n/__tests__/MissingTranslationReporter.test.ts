jest.useFakeTimers()

import MissingTranslationReporter, {
  MissingTranslationReporterFetcherInterface,
} from '../MissingTranslationReporter'

describe('MissingTranslationReporter', () => {
  let testFetcher: MissingTranslationReporterFetcherInterface

  beforeEach(() => {
    testFetcher = {
      sendReport: jest.fn(),
    }
  })

  test('report works and respects debounce', () => {
    const reporter = new MissingTranslationReporter(testFetcher)

    reporter.report({
      lang: 'en',
      namespace: 'ns',
      key: 'key1',
      master: 'phrase1',
    })

    reporter.report({
      lang: 'en',
      namespace: 'ns',
      key: 'key2',
      master: 'phrase2',
    })

    expect(testFetcher.sendReport).toBeCalledTimes(0)

    jest.advanceTimersByTime(1000)

    expect(testFetcher.sendReport).toBeCalledTimes(1)
    expect(testFetcher.sendReport).toBeCalledWith('en', [
      {
        lang: 'en',
        namespace: 'ns',
        key: 'key1',
        master: 'phrase1',
      },
      {
        lang: 'en',
        namespace: 'ns',
        key: 'key2',
        master: 'phrase2',
      },
    ])
  })

  test(`doesn't report keys once they've been reported`, async () => {
    ;(testFetcher.sendReport as jest.Mock).mockReturnValue(Promise.resolve())
    const reporter = new MissingTranslationReporter(testFetcher)

    const entry1 = {
      lang: 'en',
      namespace: 'ns',
      key: 'key1',
      master: 'phrase1',
    }
    const entry2 = {
      lang: 'en',
      namespace: 'ns',
      key: 'key2',
      master: 'phrase2',
    }
    reporter.report(entry1)

    jest.runAllTimers()
    // this is a hack to allow the promises to be immediately resolved
    await Promise.resolve()
    expect(testFetcher.sendReport).toBeCalledTimes(1)

    reporter.report(entry2)

    jest.runAllTimers()
    await Promise.resolve()
    expect(testFetcher.sendReport).toBeCalledTimes(2)

    // re-calling report on the same entry doesn't invoke the fetcher
    reporter.report(entry1)

    jest.runAllTimers()
    await Promise.resolve()
    expect(testFetcher.sendReport).toBeCalledTimes(2)
  })

  test(`doesn't report anymore after failing 5 times`, async () => {
    ;(testFetcher.sendReport as jest.Mock).mockImplementation(() => {
      throw new Error('failure')
    })
    const reporter = new MissingTranslationReporter(testFetcher)

    const entry1 = {
      lang: 'en',
      namespace: 'ns',
      key: 'fail',
      master: 'fail phrase',
    }

    reporter.report(entry1)
    jest.advanceTimersByTime(1000)
    expect(testFetcher.sendReport).toBeCalledTimes(1)

    reporter.report(entry1)
    jest.advanceTimersByTime(1000)
    expect(testFetcher.sendReport).toBeCalledTimes(2)

    reporter.report(entry1)
    jest.advanceTimersByTime(1000)
    expect(testFetcher.sendReport).toBeCalledTimes(3)

    reporter.report(entry1)
    jest.runAllTimers()
    expect(testFetcher.sendReport).toBeCalledTimes(4)

    reporter.report(entry1)
    jest.advanceTimersByTime(1000)
    expect(testFetcher.sendReport).toBeCalledTimes(5)

    // sending a 6th time wont trigger becuase failure threshold is met
    reporter.report(entry1)
    jest.advanceTimersByTime(1000)
    expect(testFetcher.sendReport).toBeCalledTimes(5)
  })
})
