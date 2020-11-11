import React, { useEffect, useMemo, useState } from 'react'
import { connect, DispatchProp } from 'react-redux'
import styles from './index.module.scss'
import { findCurrent, foundTabsData, enhanceCategoryList } from './helper'
import { State } from '@/src/models'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Search from '@/src/components/search'
import Banner from '@/src/components/banner'

export type CategoryState = State['category']
export type CategoryProps = DispatchProp & CategoryState

const Category: React.FC<CategoryProps> = props => {
  const { init, categoryList, dispatch } = props
  const [current, setCurrent] = useState(1)

  const
    ehCategoryList = useMemo(() => enhanceCategoryList(categoryList), [categoryList]),
    tabsData = useMemo(() => foundTabsData(ehCategoryList), [ehCategoryList])

  useEffect(() => {
    if (!init) {
      dispatch({
        type: 'category/getCategoryList'
      })
    }
  }, [init])

  return (
    <View className={styles.wrap}>
      <Search value='搜索，好多种美味' />
      <AtTabs
        current={current}
        tabList={tabsData}
        onClick={index => setCurrent(index)}
        tabDirection='vertical'
        animated={false}
        className={styles.tabs}
      >
        {
          ehCategoryList.map((item, index) => (
            <AtTabsPane
              current={current}
              key={item.id}
              index={index}
              tabDirection='vertical'
            >
              <Detail {...item} />
            </AtTabsPane>
          ))
        }
      </AtTabs>
    </View>
  )
}


export type DetailProps = CategoryState['categoryList'][0]
const Detail: React.FC<DetailProps> = props => {
  const { img_url, name, id } = props

  return (
    <View className={styles.detail}>
      {img_url ? <Banner name={name} banner={img_url} id={id} /> : null}
    </View>
  )
}



export default React.memo(connect((state: State) => state.category)(Category))