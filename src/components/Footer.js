import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.rectangle}></div>
            <h1 className={styles.tarefas}>x tarefa concluída</h1>
        </div>
    )
}

export default Footer