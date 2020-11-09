import { Reducer } from 'redux'

export interface GlobalModelState {
    a: string
}


export interface GlobalModelType {
    namespace: 'global',
    state: GlobalModelState,
    effects: {
        // xxxxx: Effect xxxx是effect的名字
    },
    reducers: {
        changeA: Reducer<GlobalModelState>
    }
}


const model: GlobalModelType = {
    namespace: 'global',
    state: {
        a: 'a'
    },
    effects: {
        // xxxxx: Effect xxxx是effect的名字
    },
    reducers: {
        changeA(state, { payload }) {
            state!.a = payload
        }
    }
}

export default model