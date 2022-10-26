import { useEffect } from "react";

const useEventListener = (element, type, callbackFunc) => {
    useEffect(() => {
        element.addEventListener(type, callbackFunc);
        return () => {
            element.removeEventListener(type, callbackFunc);
        };
      }, [element, type, callbackFunc]);
}

export default useEventListener;