import { useState, useEffect } from "react";
// import axios from "@/api";

// export const useFetch = (path, params, deps = []) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(path, { params })
//       .then((res) => setData(res.data))
//       .catch((err) => setError(err))
//       .finally(() => setLoading(false));
//   }, [...deps]);

//   return { data, loading, error };
// };

export default function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [url, options]);
  return { data, error, loading };
}
