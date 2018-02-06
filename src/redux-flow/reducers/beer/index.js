import {
  TOGGLE_BEER_DESCRIPTION,
  FETCH_BEER_LIST,
  FETCH_BEER_LIST_SUCCESS,
  FETCH_BEER_LIST_FAIL
} from './actions'

export const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null
}

const beer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BEER_DESCRIPTION:
      const data = state.data.map((b, index) => {
        if (index === action.payload.index) {
          return { ...b, showDescription: !b.showDescription }
        } else {
          return { ...b, disabled: !b.disabled }
        }
      })
      return {...state, data}
    case FETCH_BEER_LIST:
      return Object.assign({}, state, {
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null
      })
    case FETCH_BEER_LIST_SUCCESS:
      const res = action.payload.map(beer => ({...beer, disabled: false, showDescription: false}))
      return Object.assign({}, state, {
        isFetching: false,
        data: res,
        hasError: false,
        errorMessage: null
      })
    case FETCH_BEER_LIST_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: action.err
      })
    default: return state
  }
}

export default beer
