import './App.css';
import { useDispatch, useSelector } from './react-dedux';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.count
  });
  console.log({count})
  const increment = () => {
    dispatch({type: "increment"})
  }
  const decrement = () => {
    dispatch({type: "decrement"})
  }
  return (
    <div className="App">
      <button onClick={increment}>INCREMENT</button>
      <div>COUNT: {count}</div>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  );
}

export default App;
