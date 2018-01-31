import beer, { initialState } from './index'

import { TOGGLE_BEER_DESCRIPTION } from './actions'


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
      const action = deepFreeze({ 
        type: ''})
      const after = []
      expect(beer(before, action)).toEqual(after)
    })
  })
  describe('Action types', () => {
    it('should toggle showDescription', () => {
      const before = deepFreeze({
        name: 'beer',
        tagline: 'a nice beer',
        description: 'a very nice beer',
        image: 'http://asd.asd',
        showDescription: false
      })
      const action = deepFreeze({ 
        type: TOGGLE_BEER_DESCRIPTION})
      const after = {
        name: 'beer',
        tagline: 'a nice beer',
        description: 'a very nice beer',
        image: 'http://asd.asd',
        showDescription: true
      }
      expect(beer(before, action)).toEqual(after)
    })
    it('should toggle showDescription again', () => {
      const before = deepFreeze({
        name: 'beer',
        tagline: 'a nice beer',
        description: 'a very nice beer',
        image: 'http://asd.asd',
        showDescription: true
      })
      const action = deepFreeze({ 
        type: TOGGLE_BEER_DESCRIPTION})
      const after = {
        name: 'beer',
        tagline: 'a nice beer',
        description: 'a very nice beer',
        image: 'http://asd.asd',
        showDescription: false
      }
      expect(beer(before, action)).toEqual(after)
    })
  })
})