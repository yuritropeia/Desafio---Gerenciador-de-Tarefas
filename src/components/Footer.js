import styles from "./Footer.module.css";

function Footer({ tasks }) {
  const completedCount = tasks.filter((task) => task.completed).length;

  let message;

  if (completedCount === 0) {
    message = "Nenhuma tarefa concluída ainda";
  } else if (completedCount === 1) {
    message = "1 tarefa concluída";
  } else {
    message = `${completedCount} tarefas concluídas`;
  }

  return (
    <div className={styles.footer}>
      <div className={styles.rectangle}></div>
      <h1 className={styles.tarefas}>{message}</h1>
    </div>
  );
}

export default Footer;
