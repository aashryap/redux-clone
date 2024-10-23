import Store from "./dedux";
// import countReducer from "./reducers/counter";
import counterNew from "./reducers/counter-new";

let store = new Store();

store.combineReducers({
    counter: counterNew
});

export default store;