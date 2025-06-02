import React, { useState } from "react";
import styles from "./Content.module.css";

function Content() {
  // Estado das tarefas, começando vazio
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Função para adicionar uma nova tarefa
  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, newTaskObj]);
      setNewTask(""); // Limpa o campo de texto após adicionar a tarefa
    }
  };

  // Função para detectar o pressionamento da tecla Enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
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

  // Função para editar uma tarefa
  const editTask = (taskId) => {
    const newTaskText = prompt("Digite o novo texto da tarefa:");
    if (newTaskText) {
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, text: newTaskText } : task
        )
      );
    }
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
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Etiqueta"
          onKeyDown={handleKeyPress} // Detecta quando a tecla Enter é pressionada
        />
        <button onClick={addTask}>+</button>
      </div>

      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              <div
                style={{
                  width: "280px",
                  minHeight: "35px",
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                }}
              >
                {task.text}
              </div>

              <div
                style={{
                  width: "121px",
                  minHeight: "35px",
                  alignContent: "center",
                }}
              >
                {/* Botão para concluir a tarefa */}
                <button
                  style={{
                    border: "1px solid",
                    borderRadius: "4px",
                    width: "121px",
                    height: "44px",
                    color: "#FFFFFF",
                    backgroundColor: "#2d70fd",
                    fontFamily: "Inter",
                    fontWeight: "500",
                    fontSize: "18px",
                    lineHeight: "110%",
                    letterSpacing: "1%",
                    textAlign: "center",

                  }}
                  onClick={() => editTask(task.id)}
                >
Concluir
                </button>
              </div>
            </li>
          ))
        ) : (
          <p
            style={{
              fontFamily: "Raleway",
              fontSize: "25px",
              fontWeight: "400",
              lineHeight: "29.35px",
              textAlign: "center",
              padding: "0px",
            }}
          >
            Nenhuma tarefa adicionada ainda.
          </p>
        )}
      </ul>
    </div>
  );
}

export default Content;
