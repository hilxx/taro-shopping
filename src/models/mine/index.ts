import { Reducer, Effect } from '../@types'
import mine from '@/src/server/mine'

export interface MineModelState {
    init: boolean
}

export interface MineModelType {
    namespace: 'mine',
    state: MineModelState,
    reducers: {
        changeInit: Reducer<MineModelState>
    },
    effects: {

    },
}


const model: MineModelType = {
    namespace: 'mine',
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