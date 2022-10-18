import { useState } from "react";

import styles from "./Taskbar.module.css";
import plus from "../../assets/plus.svg";

export function Taskbar({ handleCreateNewTask }) {
  const [taskText, setTaskText] = useState("");

  function formSubmit() {
    handleCreateNewTask(taskText);
    setTaskText("");
  }

  function handleCreateTaskText() {
    setTaskText(event.target.value);
  }

  return (
    <form onSubmit={formSubmit} className={styles.form}>
      <input
        placeholder="Adicione uma tarefa"
        className={styles.input}
        value={taskText}
        onChange={handleCreateTaskText}
      />
      <button className={styles.button}>
        Criar
        <img src={plus} alt="" />
      </button>
    </form>
  );
}
