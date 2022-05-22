import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '@/views/discover/c-views/recommend/store'
import { reducer as PlayerBarReducer } from '@/components/player-bar/store'

const cReducer = combineReducers({
  recommend: recommendReducer,
  playerBar: PlayerBarReducer
})

export default cReducer
