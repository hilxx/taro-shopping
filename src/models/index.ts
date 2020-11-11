import home, { HomeModelState } from './home'
import category, { CategoryModelState } from './category'
import shopCard, { ShopCardModelState } from './shopCard'
import mine, { MineModelState } from './mine'


export default [
    home,
    category,
    shopCard,
    mine
]

export interface State {
    home: HomeModelState
    category: CategoryModelState
    shopCard: ShopCardModelState
    mine: MineModelState
}