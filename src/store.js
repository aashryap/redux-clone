import Store from "./dedux";
import countReducer from "./reducers/counter";

let store = new Store();

store.createReducer({
    counter: countReducer
});

export default store;