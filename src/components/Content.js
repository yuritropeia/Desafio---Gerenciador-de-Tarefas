import React, { useState } from "react";
import styles from "./Content.module.css";

function Content() {
  // Estado das tarefas, começando vazio
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [tag, setTag] = useState("");

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        text: newTask,
        completed: false,
        tag: tag,
        created: `${String(new Date(Date.now()).getDate()).padStart(
          2,
          "0"
        )}/${String(new Date(Date.now()).getMonth() + 1).padStart(
          2,
          "0"
        )}/${new Date(Date.now()).getFullYear()}`,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask(""); // Limpa o campo de texto após adicionar a tarefa
      setTag(""); // Limpa o campo de texto após adicionar a tarefa
    }
  };

  // Função para detectar o pressionamento da tecla Enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && tag !== "" && newTask !== "") {
      addTask(); // Chama a função de adicionar tarefa ao pressionar Enter
    }
  };

  // Função para marcar/desmarcar a tarefa como concluída
  const taskStatus = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Função para concluir uma tarefa
  const finishTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div className={styles.body}>
      <div className={styles.addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nome da tarefa"
          onKeyDown={handleKeyPress} // Detecta quando a tecla Enter é pressionada
        />

        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Etiqueta"
          onKeyDown={handleKeyPress} // Detecta quando a tecla Enter é pressionada
        />
        <button onClick={addTask}>+</button>
      </div>

      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id}>
              <div className={styles.card1}>
                <h1 className={task.completed ? styles.taskCompleted : styles.taskNotCompleted}>
                  {task.text}
                </h1>
                <div>
                  <h2>{task.tag}</h2>
                  <p>Criado em: {task.created}</p>
                </div>
              </div>

              {/* Botão para concluir a tarefa */}
              <div className={styles.card2}>
                {task.completed ? (
                  <div className={styles.checkCircle}>✔</div>
                ) : (
                  <button onClick={() => finishTask(task.id)}>Concluir</button>
                )}
              </div>
            </li>
          ))
        ) : (
          <p className={styles.nenhumaTarefa}>
            Nenhuma tarefa adicionada ainda.
          </p>
        )}
      </ul>
    </div>
  );
}

export default Content;
