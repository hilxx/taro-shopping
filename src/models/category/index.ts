import { Reducer, Effect } from '../@types'
import category from '@/src/server/category'
import { CategoryList } from './type'

export interface CategoryModelState {
    init: boolean
    categoryList: CategoryList
}

export interface CategoryModelType {
    namespace: 'category',
    state: CategoryModelState,
    reducers: {
        changeInit: Reducer<CategoryModelState>
        updateCategoryList: Reducer<CategoryModelState>
    },
    effects: {
        getCategoryList: Effect
    },
}


const model: CategoryModelType = {
    namespace: 'category',
    state: {
        init: false,
        categoryList: []
    },
    reducers: {
        changeInit(state, { payload }) {
            state.init = payload
        },
        updateCategoryList(state, { payload }) {
            state.categoryList = payload
        }
    },
    effects: {
        *getCategoryList(_, { put }) {
            const res = yield category.getCategoryList<{ categoryList: CategoryList }>()
            yield put({
                type: 'changeInit',
                payload: true
            })
            yield put({
                type: 'updateCategoryList',
                payload: res.categoryList
            })
        }
    }
}

export default model