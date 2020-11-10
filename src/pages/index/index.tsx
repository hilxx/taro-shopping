import React from 'react'
import { View, Image, SwiperItem, Swiper, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import styles from './index.module.scss'
import { usePullDownRefresh } from '@tarojs/taro'
import { DispatchProp } from 'react-redux'
import Search from '@/src/components/search'
import categoryConfig from '@/src/config/category'


const imgs = (() => {
  const imgs: string[] = []
  for (let i = 1; i < 5; i++) {
    imgs.push(require(`@/src/assets/images/test/${i}.jpg`))
  }
  return imgs
})()

export interface IndexProps extends DispatchProp {
  a: string
}

const Index: React.FC<IndexProps> = props => {
  const { dispatch } = props
  usePullDownRefresh(() => {
    dispatch({
      type: 'home/getHomeInfo'
    })
  })

  return (
    <View >
      <Search />
      <Swiper
        className={styles.swiper}
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay
      >
        {
          imgs.map((img, index) => (
            <SwiperItem key={index}>
              <Image src={img} />
            </SwiperItem>
          ))
        }
      </Swiper>

      <View className={styles.category}>
        {
          categoryConfig.map((item) => (
            <View
              className={styles['category-item']}
              key={item.id}
              onClick={() => console.log(item.id)}
            >
              <View className={`at-icon at-icon-${item.icon}`}></View>
              <View>{item.title}</View>
            </View>
          ))
        }
      </View>

    </View>
  )
}

export default connect((state: any) => state.global)(Index)