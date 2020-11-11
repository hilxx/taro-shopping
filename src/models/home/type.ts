export interface HomeInfo {
  /** 横幅图片 */  
  banner: Array<{
      id: number
      image_url: string
  }>
  /** 分类 */
  channel: Array<{
    name: string
    id: number
    icon_url: string
    /* 改类型的大图 */
    img_url: string
  }>
  /** 分类推荐 */ 
  categoryList: Array<{
      banner: string
      height: number
      id: number
      name: string
      goodsList: Array<{
          id: number
          name: string
          https_pic_url: string
          goods_unit: string
          /**商品数量 */
          goods_number: number  
          /**RMB */
          min_retail_price: number
      }>
  }>
}