import OtaClient from "@crowdin/ota-client";
import config from "core/config";

const CROWDIN_DISTRIBUTION_HASH = config('CROWDIN_DISTRIBUTION_HASH')
export const crowdin = new OtaClient(CROWDIN_DISTRIBUTION_HASH as string, {
    disableJsonDeepMerge: true,
})