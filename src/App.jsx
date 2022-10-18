import { Header } from "./components/Header";
import clipboard from "./assets/Clipboard.svg";
import { v4 as uuidv4 } from "uuid";

import "./global.css";
import styles from "./App.module.css";
import { Tasks } from "./components/Tasks";

import { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState([]);

  const completedTasks = newTask.filter((task) => task.isCompleted === true);
  const completedTasksCount = completedTasks.length;

  function handleCreateNewTask(taskTitle) {
    event.preventDefault();

    if (taskTitle === "") {
      alert("Insira um título para a tarefa");
      return;
    }

    setNewTask([
      ...newTask,
      {
        id: uuidv4(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function handleCompleteTask(id) {
    const toggleTaskCompleted = newTask.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setNewTask(toggleTaskCompleted);
  }

  function handleDeleteTasks(id) {
    const taskWithoutDeletedOne = newTask.filter((task) => {
      return task.id !== id;
    });
    setNewTask(taskWithoutDeletedOne);
  }

  return (
    <>
      <Header handleCreateNewTask={handleCreateNewTask} />

      <main className={styles.tasksWrapper}>
        <header className={styles.tasksHeader}>
          <p className={styles.taskCreated}>
            Tarefas Criadas <span>{newTask.length}</span>
          </p>
          <p className={styles.taskConcluded}>
            Concluídas
            <span>
              {completedTasksCount} de {newTask.length}
            </span>
          </p>
        </header>
        {newTask.length > 0 ? (
          newTask.map((newTask) => {
            return (
              <Tasks
                newTask={newTask}
                key={newTask.id}
                handleCompleteTask={handleCompleteTask}
                handleDeleteTasks={handleDeleteTasks}
              />
            );
          })
        ) : (
          <div className={styles.tasks}>
            <img src={clipboard} alt="" />

            <p className={styles.tasksInfo}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
