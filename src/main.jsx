
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from "./reducer"
import { Provider } from 'react-redux'


const store  = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
