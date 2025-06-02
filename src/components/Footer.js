import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <h1 className={styles.tarefas}>x tarefa concluída</h1>
        </div>
    )
}

export default Footer