import * as actionTypes from './constants'

const defaultStore = {
  banner: []
}

function reducer(state = defaultStore, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return { ...state, banner: action.banner }
    default:
      return state
  }
}

export default reducer
