import { combineReducers } from "redux"
import index from "./index"

const rootReducer = combineReducers({
  main: index
})

export default rootReducer;