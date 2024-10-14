function Store(initialState = {}) {
	let dl = initialState;
  this.reducers = {};
  
  this.getStore = () => {
  	return dl;
  }
  
  this.subscribedCbs = [];
  
  this.createReducer = (reducers) => {
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

export default Store;