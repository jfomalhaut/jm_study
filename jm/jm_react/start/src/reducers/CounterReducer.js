import { CounterAction } from '../actions'

const { INCREMENT } = CounterAction

const initialState = 0

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return state + action.add
    }
    default: {
      return state
    }
  }
}
export default CounterReducer;