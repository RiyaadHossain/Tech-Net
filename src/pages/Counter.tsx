import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { decrement, increment } from "../redux/features/coutner/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center flex justify-center items-center mt-20 gap-5">
      <button
        className="bg-green-500 px-8 font-semibold text-lg rounded-md py-2"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <h2 className="text-3xl font-semibold">{count}</h2>
      <button
        className="bg-red-500 px-8 font-semibold text-lg rounded-md py-2"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
}
