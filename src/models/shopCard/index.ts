import { Reducer, Effect } from '../@types'
import shopCard from '@/src/server/shopCard'


export interface ShopCardModelState {
    init: boolean
}

export interface ShopCardModelType {
    namespace: 'shopCard',
    state: ShopCardModelState,
    reducers: {
        changeInit: Reducer<ShopCardModelState>
    },
    effects: {
    
    },
}


const model: ShopCardModelType = {
    namespace: 'shopCard',
    state: {
        init: false
    },
    reducers: {
        changeInit(state, {payload}) {
            state.init = payload
        }
    },
    effects: {
    }
}

export default model