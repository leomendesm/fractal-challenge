import React, { Component } from 'react'
import { List } from './containers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './redux-flow/reducers'
import { createStore, applyMiddleware } from 'redux'
const store = createStore(
  reducers,
  applyMiddleware(thunk)
)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <List />
      </div>
      </Provider>
    );
  }
}

export default App
