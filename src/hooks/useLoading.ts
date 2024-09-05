import { useState, useEffect } from "react";

const useLoading = (initialDelay: number = 600) => {
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setIsInitialLoad(false);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const triggerLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), initialDelay / 1.5);
  };

  return { loading, isInitialLoad, triggerLoading };
};

export default useLoading;
