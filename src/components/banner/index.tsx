import React from 'react'
import Taro from '@tarojs/taro'
import { Image, View, Text } from '@tarojs/components'
import styles from './index.module.scss'
import {} from '@/src/config/path'

export interface BannerProps {
    banner: string
    name: string
    id: number
    disableClick: boolean
}



const Banner: React.FC<BannerProps> = props => {
    const { banner, name, id, disableClick } = props
    const clickHandle = () => {
        if (disableClick) return
        Taro.switchTab({
            url: `?category=${id}`
        })
    }
    return (
        <View
            className={styles.banner}
            onClick={clickHandle}
        >
            <Image
                src={banner}
            />
            <Text>
                {name}
            </Text>
        </View>
    )
}

export default Banner