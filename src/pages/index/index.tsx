import React from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import './index.scss'
import { usePullDownRefresh } from '@tarojs/taro'
import { DispatchProp } from 'react-redux'

export interface IndexProps extends DispatchProp {
  a: string
}

const Index: React.FC<IndexProps> = props => {
  usePullDownRefresh(() => console.log('refresh'))

  return (
    <View className='index'>
      <View className='at-icon at-icon-settings'></View>
      <Text>Hello world!</Text>
      <Text>{props.a}</Text>
    </View>
  )
}

export default connect((state: any) => state.global)(Index)