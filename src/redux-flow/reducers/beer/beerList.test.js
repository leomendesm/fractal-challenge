import beer, { initialState } from './index'

import {
  TOGGLE_BEER_DESCRIPTION,
  FETCH_BEER_LIST,
  FETCH_BEER_LIST_SUCCESS,
  FETCH_BEER_LIST_FAIL
} from './actions'

import deepFreeze from 'deep-freeze'

describe('Beer reducer', () => {
  describe('Smoke Test', () => {
    it('should beer be a function', () => {
      expect(typeof beer).toBe('function')
    })
  })

  describe('Initial State', () => {
    it('should return initial state when state is undefined', () => {
      const before = undefined
      const action = deepFreeze({ type: '' })
      const after = initialState
      expect(beer(before, action)).toEqual(after)
    })
    it('should return state when action is undefined', () => {
      const before = deepFreeze([])
      const action = deepFreeze({ type: '' })
      const after = []
      expect(beer(before, action)).toEqual(after)
    })
  })

  describe('Toggle Descriptions', () => {
    it('should toggle showDescription', () => {
      const before = deepFreeze(
        {
          data: [
            {
              name: 'beer',
              tagline: 'a nice beer',
              description: 'a very nice beer',
              image: 'http://asd.asd',
              showDescription: false,
              disabled: false
            },
            {
              name: 'beer',
              tagline: 'a nice beer',
              description: 'a very nice beer',
              image: 'http://asd.asd',
              showDescription: false,
              disabled: false
            }
          ]
        }
      )
      const action = deepFreeze({
        type: TOGGLE_BEER_DESCRIPTION,
        payload: {
          index: 0
        }
      })
      const after = {
        data: [
          {
            name: 'beer',
            tagline: 'a nice beer',
            description: 'a very nice beer',
            image: 'http://asd.asd',
            showDescription: true,
            disabled: false
          },
          {
            name: 'beer',
            tagline: 'a nice beer',
            description: 'a very nice beer',
            image: 'http://asd.asd',
            showDescription: false,
            disabled: true
          }
        ]
      }
      expect(beer(before, action)).toEqual(after)
    })
    it('should toggle showDescription again', () => {
      const before = deepFreeze(
        {
          data: [
            {
              name: 'beer',
              tagline: 'a nice beer',
              description: 'a very nice beer',
              image: 'http://asd.asd',
              showDescription: true,
              disabled: false
            },
            {
              name: 'beer',
              tagline: 'a nice beer',
              description: 'a very nice beer',
              image: 'http://asd.asd',
              showDescription: false,
              disabled: true
            }
          ]
        }
      )
      const action = deepFreeze({
        type: TOGGLE_BEER_DESCRIPTION,
        payload: {
          index: 0
        }
      })
      const after = {
        data: [
          {
            name: 'beer',
            tagline: 'a nice beer',
            description: 'a very nice beer',
            image: 'http://asd.asd',
            showDescription: false,
            disabled: false
          },
          {
            name: 'beer',
            tagline: 'a nice beer',
            description: 'a very nice beer',
            image: 'http://asd.asd',
            showDescription: false,
            disabled: false
          }
        ]
      }
      expect(beer(before, action)).toEqual(after)
    })
  })

  describe('Fetch beer list data', () => {
    it('should return isFetching true when action type is FETCH_BEER_LIST', () => {
      const before = deepFreeze(
        {
          isFetching: null,
          data: [],
          hasError: false,
          errorMessage: null
        }
      )
      const action = deepFreeze({
        type: FETCH_BEER_LIST
      })
      const after = {
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null
      }
      expect(beer(before, action)).toEqual(after)
    })
  })

  describe('Fetch beer list data responses', () => {
    it('should set data equal to payload and isFetching false when action type is FETCH_BEER_LIST_SUCCESS', () => {
      const before = deepFreeze(
        {
          isFetching: null,
          data: [],
          hasError: false,
          errorMessage: null
        }
      )
      const action = deepFreeze({
        type: FETCH_BEER_LIST_SUCCESS,
        payload: [
          {
            name: 'beer',
            tagline: 'a nice beer',
            description: 'a very nice beer',
            image: 'http://asd.asd',
            showDescription: false,
            disabled: false
          },
          {
            name: 'beer',
            tagline: 'a nice beer',
            description: 'a very nice beer',
            image: 'http://asd.asd',
            showDescription: false,
            disabled: false
          }
        ]
      }
      )
      const after = {
        isFetching: false,
        data: [{
          name: 'beer',
          tagline: 'a nice beer',
          description: 'a very nice beer',
          image: 'http://asd.asd',
          showDescription: false,
          disabled: false
        },
        {
          name: 'beer',
          tagline: 'a nice beer',
          description: 'a very nice beer',
          image: 'http://asd.asd',
          showDescription: false,
          disabled: false
        }],
        hasError: false,
        errorMessage: null
      }
      expect(beer(before, action)).toEqual(after)
    })
    it('should set errorMessage equal to payload, hasError true and isFetching false when action type is FETCH_BEER_LIST_FAIL', () => {
      const before = deepFreeze(
        {
          isFetching: null,
          data: [],
          hasError: false,
          errorMessage: null
        }
      )
      const action = deepFreeze({
        type: FETCH_BEER_LIST_FAIL,
        err: 'fail'
      })
      const after = {
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: 'fail'
      }
      expect(beer(before, action)).toEqual(after)
    })
  })
})
