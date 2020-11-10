import React from 'react'
import Banner, { BannerProps } from './banner'
import { View, Image, Text } from '@tarojs/components'
import styles from './index.module.scss'

export interface CategoryProps extends BannerProps {
    list: ListItem[]
}

export interface ListItem {
    img: string
    noStock: boolean
    id: number
    price: number
    name: string
}

const Category: React.FC<CategoryProps> = props => {
    const { list, ...restProps } = props
    return (
        <View className={styles.category}>
            <Banner {...restProps} />
            <View className={styles['category-grid']}>
                {
                    list.map(item => (
                        <View
                            key={item.id}
                            className={styles['category-grid-item']}
                        >
                            <Image src={item.img} />
                            <Text>{item.name}</Text>
                            <Text>￥{item.price}</Text>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default Category