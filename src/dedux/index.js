function Store(initialState = {}) {
	let dl = initialState;
  this.reducers = {};
  
  this.getStore = () => {
  	return dl;
  }
  
  this.subscribedCbs = [];
  
  this.combineReducers = (reducers) => {
  	 for (let key in reducers) {
     	dl[key] = reducers[key](undefined, {});
     }
     this.reducers = reducers;
  }
  
  this.dispatch = ({type, payload}) => {
    for (let key in this.reducers) {
    	dl[key] = this.reducers[key](dl[key], {type, payload});
    }
    runCallbacks();
  }
  
  this.subscribe = (cb) => {
	  	this.subscribedCbs.push(cb);
  }
  
  let runCallbacks = () => {
  	this.subscribedCbs.forEach((cb) => {
    	cb(dl);
    })
  }
}

let createActions = (name, reducers) => {
  let actions = {};
  for (let reducer in reducers) {
    actions[`${reducer}`] = actionCreator(`${reducer}`);
  }
  return actions;
}


let actionCreator = (type) => {
  return function(payload) {
    return {
      type,
      payload
    }
  }
};

export const createSlice = (sliceConfiguration) => {
  let initialState = sliceConfiguration.initialState;
  return {
    actions: createActions(sliceConfiguration.name, sliceConfiguration.reducers),
    reducer: (state = initialState, action) => {
      if (action.type) {
        return sliceConfiguration.reducers[action.type](state, action);
      }
      return state;
    }
  }
}


export default Store;