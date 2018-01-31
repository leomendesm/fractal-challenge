import { 
  TOGGLE_BEER_DESCRIPTION
} from './actions'

export const initialState = []

const beer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BEER_DESCRIPTION: return {...state, showDescription: !state.showDescription}
    default: return state
  }
}

export default beer
