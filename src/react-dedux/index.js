import {createContext, useContext, useEffect, useState} from "react";

const Dedux = createContext();

export const Provider = ({children, store}) => {
    return <Dedux.Provider value={store}>
        {
            children
        }
    </Dedux.Provider>
}

export const useDispatch = () => {
    const store = useContext(Dedux);
    return store.dispatch
}


export const useSelector = (cb) => {
    const store = useContext(Dedux);
    const [state, setState] = useState(cb(store.getStore()));
    useEffect(() => {
      store.subscribe((newState) => {
        setState(cb(newState));
      });
    }, []);
    return state;
}
