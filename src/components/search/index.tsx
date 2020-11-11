import React from 'react'
import Taro from '@tarojs/taro'
import { AtSearchBarProps } from 'taro-ui/types/search-bar'
import { AtSearchBar } from 'taro-ui'

const Search: React.FC<Partial<AtSearchBarProps>> = props => {
    const { value = '', ...restProps } = props
    return (
            <AtSearchBar
                value={value}
                onChange={Function.prototype as any}
                {...restProps}
                onFocus={
                    () => {
                        Taro.navigateTo({
                            url: '../search/index'
                        })
                    }
                }
            />
    )
}



export default Search