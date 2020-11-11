import React from 'react'
import Banner, { BannerProps } from '@/src/components/banner'
import { View, Image, Text } from '@tarojs/components'
import styles from './index.module.scss'
import { HomeState } from './index'

type CategoryItem = HomeState['homeInfo']['categoryList'][0]

export interface CategoryProps extends CategoryItem, BannerProps {

}



const Category: React.FC<CategoryProps> = props => {

    // goodList: Array < {
    //     id: number
    //       name: string
    //       https_pic_url: string
    //       goods_unit: string
    //       /**商品数量 */
    //       goods_number: number
    //       /**RMB */
    //       min_retail_price: number
    // } >
    const { goodsList, ...restProps } = props

    return (
        <View className={styles.category}>
            <Banner {...restProps} />
            <View className={styles['category-grid']}>
                {
                    goodsList.map(item => (
                        <View
                            key={item.id}
                        >
                            <Image src={item.https_pic_url} />
                            <View className={styles['cg-item-desc']}>
                                <Text>{item.name}</Text>
                                <Text>￥{item.min_retail_price}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
            <View className={styles.footer}>
                点击查看更多{restProps.name}
            </View>
        </View>
    )
}

export default Category