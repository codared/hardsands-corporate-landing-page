
import { getCookie, setCookie } from 'modules/shared/cookie'
import { useRouter } from 'next/router'


export const useDisableAnalytics = () => {
    const router = useRouter()

    const isClient = typeof window !== 'undefined'

    const hasDisableCookie = isClient && getCookie('analytics_disable') === 'true'
    const hasDisableQuery = router.query.analytics_disable === 'true'

    if(hasDisableQuery && isClient){
        setCookie('analytics_disable', 'true')
    }

    return hasDisableQuery || hasDisableCookie
}