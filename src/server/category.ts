import request from '@/src/utils/server'
import apis from './apis'


export default {
    getCategoryList<T = any>() {
        return request<T>({
            url: apis.CatalogList
        })
    }
}