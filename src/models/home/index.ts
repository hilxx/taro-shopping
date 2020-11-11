
import common from '@/src/server/common'
import { Effect, Reducer } from '../@types'
import { HomeInfo } from './type'

export interface HomeModelState {
    init: boolean
    homeInfo: HomeInfo
}

export interface HomeModelType {
    namespace: 'home',
    state: HomeModelState,
    reducers: {
        changeInit: Reducer<HomeModelState>
        updateHomeInfo: Reducer<HomeModelState>
    },
    effects: {
        getHomeInfo: Effect
    },
}

const model: HomeModelType = {
    namespace: 'home',
    state: {
        init: false,
        homeInfo: {
            banner: [],
            channel: [],
            categoryList: []
        }
    },
    reducers: {
        changeInit(state, { payload }) {
            state.init = payload
        },
        updateHomeInfo(state, { payload }) {
            state.homeInfo = payload
        }
    },
    effects: {
        *getHomeInfo(_, { put, call }) {
            console.log('getHomeInfo');
            const res = yield call(common.getHomeInfo)
            yield put({
                type: 'updateHomeInfo',
                payload: res
            })
        }
    },
}

export default model
export * from './type'