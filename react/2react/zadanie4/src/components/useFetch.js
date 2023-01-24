import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch(`https://api.github.com/users/eunit99/repos`)
    fetch(url)
      .then((response) => response.json())
      .then((usefulData) => {
        //  console.log(usefulData);
        setLoading(false);
        setData(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  return { data, loading, error };
}

export default useFetch;
