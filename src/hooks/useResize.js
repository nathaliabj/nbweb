import { useLayoutEffect, useEffect, useState } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function useResize(fn, observables = []) {
  useIsomorphicLayoutEffect(() => {
    window.addEventListener("resize", fn);
    fn();
    return () => {
      window.removeEventListener("resize", fn);
    };
  }, observables);
}

export function useMobileSize(observables) {
  const [isMobile, setIsMobile] = useState(true);
  useResize(() => {
    if (window) {
      setIsMobile(window.innerWidth < 768);
    }
  }, [observables]);
  return isMobile;
}
