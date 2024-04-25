import { useState } from "react";
import { Outlet } from "react-router-dom";
import * as styles from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const onClick = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>{__PLATFORM__}</h1>
      <div>{count}</div>
      <button onClick={onClick} className={styles.value}>
        Click
      </button>
      <Outlet />
    </div>
  );
};
