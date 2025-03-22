import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function ListTask({ tasks = [] }) {
  const [counter, setCounter] = useState(0);

  return (
    <>
      {tasks.map((task) => {
        return (
          <article key={task.id + 1}>
            <header>
              <h3>{task.name}</h3>
            </header>

            <main>
              <p>{task.complete ? "Completada" : "incompleta"}</p>
              <p>
                Prioridad: {task.priority} {Math.random(1)}{" "}
              </p>
              <span> date: {task.date}</span>
            </main>

            <input
              placeholder="hi"
              onChange={() => {
                setCounter((prev) => prev - 1);
              }}
            ></input>
          </article>
        );
      })}
      <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
    </>
  );
}
