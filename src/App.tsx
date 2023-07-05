import { Link } from "react-router-dom";

function App() {
  return (
    <div className="text-center mt-12">
      <button className="px-8 rounded-md py-2 text-2xl bg-sky-500 font-semibold">
        <Link to={"/counter"}>Go To Counter</Link>
      </button>
    </div>
  );
}

export default App;
