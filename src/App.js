import React, { Component } from 'react'
import { List } from './containers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './redux-flow/reducers'
import {
  createStore,
  applyMiddleware } from 'redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
const store = createStore(
  reducers,
  applyMiddleware(thunk)
)
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path={'/'} component={List} />
            <Route exact path={'/buy'} component={List} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
