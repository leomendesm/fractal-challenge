import {
  TOGGLE_BEER_DESCRIPTION,
  FETCH_BEER_LIST,
  FETCH_BEER_LIST_SUCCESS,
  FETCH_BEER_LIST_FAIL
} from './actions'

import { apiBaseURL } from '../../../utils/constants'

import axios from 'axios'

export const toggleBeerDescription = index => ({
  type: TOGGLE_BEER_DESCRIPTION,
  payload: {
    index
  }
})

export function FetchBeerList (dispatch) {
  return dispatch => {
    dispatch({ type: FETCH_BEER_LIST })
    return axios.get(`${apiBaseURL}/v2/beers?page=2&per_page=4`)
      .then(res => dispatch({ type: FETCH_BEER_LIST_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: FETCH_BEER_LIST_FAIL, payload: err }))
  }
}
