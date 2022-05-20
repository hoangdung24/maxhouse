import useSWR from "swr";
import queryString from "query-string";

import { useState, useEffect, useCallback } from "react";

const useFetch = (url, options, isLazyLoading = true) => {
  const [data, setData] = useState(undefined);
  const [shouldFetch, setShouldFetch] = useState(!isLazyLoading);

  const [fetchURL, setFetchURL] = useState(() => {
    if (options === undefined) {
      return url;
    }

    return `${url}?${queryString.stringify(options)}`;
  });

  const [isDone, setIsDone] = useState(false);

  const {
    data: resData,
    error,
    mutate,
  } = useSWR(() => {
    if (fetchURL === null || !shouldFetch) {
      return;
    }

    return fetchURL;
  });

  useEffect(() => {
    if (resData === undefined) {
      return;
    }

    setFetchURL(resData.next);
    setShouldFetch(false);

    if (resData.next === null) {
      setIsDone(true);
    }

    setData((prev) => {
      if (Array.isArray(prev)) {
        return [...prev, ...resData.results];
      }

      return resData.results;
    });
  }, [resData]);

  const fetchMore = useCallback((data = true) => {
    setShouldFetch(data);
  }, []);

  const setUrlHandler = useCallback((url, options = undefined) => {
    setData([]);
    setIsDone(false);
    if (options === undefined) {
      setFetchURL(`${url}`);
    } else {
      setFetchURL(`${url}?${queryString.stringify(options)}`);
    }

    fetchMore();
  }, []);

  return { data, error, mutate, fetchMore, isDone, setUrl: setUrlHandler };
};

export default useFetch;
