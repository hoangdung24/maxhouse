import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePrevious } from "react-use";
import queryString from "query-string";

import omit from "lodash/omit";
import isEqual from "lodash/isEqual";

export const useParams = ({
  initState = {},
  callback = () => {},
  excludeKeys = [],
  isUpdateRouter = true,
}) => {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [params, setParams] = useState(initState);
  const prevParams = usePrevious(params);

  useEffect(() => {
    setParams((prev) => {
      return {
        ...prev,
        ...router.query,
      };
    });
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isEqual(prevParams, params)) {
      return;
    }

    const urlParams = omit(params, [...excludeKeys]);

    const stringifyParams = queryString.stringify(urlParams);
    const pathname = `${router.pathname}?${stringifyParams}`;

    callback(params);

    if (isUpdateRouter) {
      router.push(pathname, pathname, {
        shallow: true,
      });
    }
  }, [callback, params, prevParams]);

  const paramsHandler = useCallback((value) => {
    setParams((prev) => {
      return {
        ...prev,
        ...value,
      };
    });
  }, []);

  const resetParams = useCallback(() => {
    setParams(initState);
  }, []);

  return [params, paramsHandler, isReady, resetParams];
};

export default useParams;
