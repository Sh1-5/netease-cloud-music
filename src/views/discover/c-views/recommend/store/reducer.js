import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultStore = Map({
  banner: []
})

function reducer(state = defaultStore, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('banner', action.banner)
    default:
      return state
  }
}

export default reducer
