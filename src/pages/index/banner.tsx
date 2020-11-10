import React from 'react'
import { Image, View, Text } from '@tarojs/components'
import styles from './index.module.scss'

export interface BannerProps {
    img: string
    title: string
}

const Banner: React.FC<BannerProps> = props => {
    return (
        <View className={styles.banner}>
            <Image
                src={props.img}
            />
            <Text>
                {props.title}
            </Text>
        </View>
    )
}

export default Banner