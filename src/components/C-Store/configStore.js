import { createStore, combineReducers } from "redux";
import { commonReducers } from "../R-Reducer/commonReducer";

export const configStore=()=>{
    const myStore=createStore(
        combineReducers({commonReducers }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return myStore;
};