import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Counter from './routers/Counter'
import Input from './routers/Input'
import Input2 from './routers/Input2'
import Counter2 from './routers/Counter2'
import Address from './routers/Address'
import Scroll from './routers/Scroll'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import List from './routers/List'
import Signin from './routers/Signin'
import { PersistGate } from 'redux-persist/es/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector('#root')
)
