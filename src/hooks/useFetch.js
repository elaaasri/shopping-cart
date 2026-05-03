import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(url, { signal })
      .then((res) => {
        if (!res.ok)
          throw new Error(`Request failed with status ${res.status}`);

        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === "AbortError") return;
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};
export default useFetch;
