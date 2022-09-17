import { identityFunction } from "utils/types"

Object.defineProperties(process, {
    browser: {
        value: true,
        writable: true
    }
})

const setup = () => identityFunction

export {setup}