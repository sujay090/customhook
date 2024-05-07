import { useState, useEffect } from "react";
function UseFetch() {
  const [data, setdata] = useState([]);
  function fetch2(){
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((data) => data.json())
      .then((res) => setdata(res))
      .catch((err) => setdata(err));
  }
  useEffect(() => {
    fetch2()
  }, []);

  return data;
}
export default UseFetch;
