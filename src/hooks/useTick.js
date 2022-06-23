import { useRef, useState, useEffect, useCallback } from "react";

const tick = (callback, time) => {
  let timer = setInterval(callback, time);

  return {
    stop: () => {
      if (timer !== null) {
        clearInterval(timer);
        timer = null;
      }
    },
    resume: () => {
      if (timer === null) {
        timer = setInterval(callback, time);
      }
    },
  };
};

export const useTick = (callback, time, deps = []) => {
  const [shouldTick, setShouldTick] = useState(true);
  const timer = useRef(null);

  const startTimer = useCallback(() => tick(callback, time), [time, ...deps]);

  useEffect(() => {
    timer.current?.stop();
    timer.current = startTimer();

    return () => timer.current?.stop();
  }, [startTimer]);

  useEffect(() => {
    shouldTick ? timer.current?.resume() : timer.current?.stop();
  }, [shouldTick]);

  return setShouldTick;
};
