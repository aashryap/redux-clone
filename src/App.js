import './App.css';
import { useDispatch, useSelector } from './react-dedux';
import { increment, decrement } from './reducers/counter-new';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.count
  });
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <div>COUNT: {count}</div>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
    </div>
  );
}

export default App;
