import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import './index.scss'
class Index extends Component<any> {

  componentWillMount() { }

  componentDidMount() {
    this.props.dispatch({
      type: 'global/changeA',
      payload: Math.random() + ''
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Text>{this.props.a}</Text>
      </View>
    )
  }
}


export default connect(state => state.global)(Index)