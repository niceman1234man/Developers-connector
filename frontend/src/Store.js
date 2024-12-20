import {createStore,applyMiddleware,compose} from 'redux'
import {thunk} from 'redux-thunk'
import rootReducers from './reducers'
const middleawre=[thunk]
const initailstate={}
const store=createStore( ()=>rootReducers,initailstate,compose(applyMiddleware(...middleawre)));
export default store