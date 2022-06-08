import {PencilLine } from "phosphor-react"; 

import styles from "./Sidebar.module.css"; 


export function Sidebar(){ 
  return ( 
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1654541696896-bd5d8feed3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <img 
          className={styles.avatar} 
          src="https://github.com/Matheusmottaa.png" 
        />
        <strong>John Doe</strong>
        <span>Full Stack Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  ); 
}