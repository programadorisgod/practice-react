import { useState } from "react";
import { ItemTask } from "./ItemComponet";
import { useCallback } from "react";

export function ListTask({ tasks = [] }) {
  const [counter, setCounter] = useState(0);

  const handleInputChange = useCallback(() => {
    setCounter((prev) => prev - 1);
  });
  return (
    <>
      {tasks.map((task) => {
        return (
          <ItemTask
            key={task.id}
            task={task}
            handleInputChange={handleInputChange}
          />
        );
      })}
      <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
    </>
  );
}
