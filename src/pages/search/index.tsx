import React, { useState } from 'react'
import styles from './index.module.scss'
import { View } from '@tarojs/components'
import { AtSearchBarProps } from 'taro-ui/types/search-bar'
import { AtSearchBar } from 'taro-ui'


export interface SearchProps extends AtSearchBarProps {

}

const Search: React.FC<SearchProps> = props => {
    return (
        <View>
           serch-page
        </View>
    )
}

export default Search