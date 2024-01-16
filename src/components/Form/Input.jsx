import { forwardRef } from "react";

export default forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
