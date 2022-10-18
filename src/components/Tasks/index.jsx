import styles from "./Tasks.module.css";
import checked from "../../assets/checked.svg";
import check from "../../assets/check.svg";

import { Trash } from "phosphor-react";

export function Tasks({ newTask, handleCompleteTask, handleDeleteTasks }) {
  return (
    <div
      className={
        newTask.isCompleted
          ? `${styles.tasksList} ${styles.taskDone} `
          : styles.tasksList
      }
    >
      <div className={styles.infosTaskList}>
        {newTask.isCompleted ? (
          <button
            className={styles.button}
            onClick={() => handleCompleteTask(newTask.id)}
            title="Marcar tarefa como incompleta"
          >
            <img src={checked} alt="" />
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={() => handleCompleteTask(newTask.id)}
            title="Marcar tarefa como completa"
          >
            <img src={check} alt="" />
          </button>
        )}

        <p>{newTask.title}</p>
      </div>
      <button
        className={styles.button}
        onClick={() => handleDeleteTasks(newTask.id)}
        title="Deletar task"
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
