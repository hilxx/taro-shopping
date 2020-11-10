import request from '@/src/utils/server'
import apis from './apis'

export default {
    /* 首页 */
    getHomeInfo() {
        return request({
            url: apis.IndexUrl
        })
    }
}