import React, { useEffect } from 'react'
import { View, Image, SwiperItem, Swiper } from '@tarojs/components'
import { connect } from 'react-redux'
import styles from './index.module.scss'
import { usePullDownRefresh } from '@tarojs/taro'
import { DispatchProp } from 'react-redux'
import { State } from '@/src/models'
import Search from '@/src/components/search'
import Category from './category'

export type HomeState = State['home']
type IndexProps = DispatchProp & HomeState

const Index: React.FC<IndexProps> = props => {
  const { dispatch, init, homeInfo } = props
  const { banner, categoryList, channel } = homeInfo
  console.log(categoryList);
  useEffect(() => {
    if (!init) {
      dispatch({
        type: 'home/getHomeInfo'
      })
      dispatch({
        type: 'home/changeInit',
        payload: true
      })
    }
  }, [])

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
          banner.map((img) => (
            <SwiperItem key={img.id}>
              <Image src={img.image_url} />
            </SwiperItem>
          ))
        }
      </Swiper>

      <View className={styles.channel}>
        {
          channel.map((item) => (
            <View
              className={styles['category-item']}
              key={item.id}
              onClick={() => console.log(item.id)}
            >
              <Image src={item.icon_url} />
              <View>{item.name}</View>
            </View>
          ))
        }
      </View>

      {
        categoryList.map(category => (
          <Category key={category.id} {...category} />
        ))
      }

      <View className={styles.footer}>
        没有更多商品了
      </View>

    </View>
  )
}

export default React.memo(connect((state: State) => state.home)(Index))