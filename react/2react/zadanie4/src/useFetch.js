import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
 
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => console.log(json));
      
  }, [url])
//   console.log(data)

  return (
    { data, loading }
    // <h1>{data}</h1>

  )
}

export default useFetch;
