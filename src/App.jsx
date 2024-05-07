import { useState } from "react";
import Card from "./components/card";
import UseFetch from "./hooks/useFetch";
function App() {
  const [count, setCount] = useState(0);
  const data = UseFetch();

  const data4 = data.slice(0, 60);

  return (
    <>
      <div className="pb-9 grid items-center justify-center pt-2">
        <h1 className="text-2xl font-bold text-white">Photo</h1>
      </div>
      <div className="p-10 flex flex-wrap items-center gap-5 justify-center">
        {
          data4.map((item, i) => {
            return <Card item={item} key={i} />;
          })
        }
      </div>
    </>
  );
}

export default App;
