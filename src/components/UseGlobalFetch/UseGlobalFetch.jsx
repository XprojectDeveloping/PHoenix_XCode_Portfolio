import { useEffect, useState } from "react";

const UseGlobalFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/lib/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP fetch error" + res.status);
        }
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);
  return { data };
};

export default UseGlobalFetch;
