import Taro from '@tarojs/taro'

interface ResponseData<T> {
    errmsg: string
    errno: number,
    data: T
}
/**
 * @T response data
 * @U request data
 *  */
export default <T = any, U = any>(option: Taro.request.Option<U>) => {
    return Taro.request<ResponseData<T>>(option)
        .then(res => res.data.data)
        .catch(err => {
            console.log(err);
        })
}