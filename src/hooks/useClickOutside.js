import { useId, useEffect, useCallback } from "react";

export default (reference, handler) => {
  const referenceId = useId();

  const onGlobalClick = useCallback(
    (event) =>
      handler(
        Boolean(event.target.closest(`[data-selector-id="${referenceId}"]`))
      ),
    [handler]
  );

  useEffect(() => {
    if (
      reference.current &&
      !reference.current.hasAttribute("data-selector-id")
    ) {
      reference.current.setAttribute("data-selector-id", referenceId);
    }

    addEventListener("click", onGlobalClick);

    return () => removeEventListener("click", onGlobalClick);
  }, [onGlobalClick, reference]);
};
