import { CategoryState } from './'

type CategoryList = CategoryState['categoryList']

export const foundTabsData = (arr: CategoryList) =>
    arr.map(item => ({
        title: item.name
    }))

export const findCurrent = (arr: CategoryList, id: number) =>
    arr.findIndex(item => item.id === id) + 1

export const enhanceCategoryList = (arr: CategoryList): CategoryList =>
    [
        {
            name: '全部',
            id: -1,
            img_url: ''
        },
        ...arr
    ]  