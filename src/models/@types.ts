import { Effect } from 'dva'

interface AnyAction {
    payload: any
    type: string
}

/* 针对开启immer */
export type Reducer<S = any> = (state: S, action: AnyAction) => S | void


export { Effect }

