
import common from '@/src/server/common'
import { Model, Effect, Reducer } from '../@types'


export interface GlobalModelState {

}


export interface GlobalModelType extends Model {
    namespace: 'home',
    state: GlobalModelState,
    reducers: {

    },
    effects: {
        getHomeInfo: Effect
    },
}

const model: GlobalModelType = {
    namespace: 'home',
    state: {

    },
    reducers: {

    },
    effects: {
        *getHomeInfo(_, { put }) {
            console.log('getHomeInfo');
            common.getHomeInfo().then(res => {
                console.log(res);
            })
        }
    },
}

export default model