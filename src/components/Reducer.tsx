import { useDispatch } from "react-redux";
import { increement } from "../redux/slice/counterSlice";

export default function Reducer() {
  //const [state,dispatch] = useReducer(reducer,initialState)
  const dispatch = useDispatch();

  return (
    <>
      <h1>Cart</h1>
      <button onClick={() => dispatch(increement())}>Add Item</button>
      <button>Remove Item</button>
    </>
  );
}
