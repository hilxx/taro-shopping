import { Effect } from 'dva'

interface AnyAction {
    payload: any
    type: string
}

/* 针对开启immer */
export type Reducer<S = any> = (state: S, action: AnyAction) => S | undefined

export interface Model {
    namespace: string
    state: object
    reducers?: {
        [key: string]: Reducer
    },
    effects?: {
        [key:string]: Effect
    }
}


export { Effect }

