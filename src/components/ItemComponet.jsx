import { memo } from "react";

export const ItemTask = memo(({ task, onInputChange }) => {
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

      <input placeholder="hi" onChange={() => onInputChange}></input>
    </article>
  );
});
