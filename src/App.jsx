import { Post } from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

export function App() {

  return (
    <div className="App">
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post
            author="Glauber Bandeira"
            content="12 razões para escolher React para seu próximo projeto de desenvolvimento web"
          />
          <Post
            author="Fernando Bandeira"
            content="React: Simplicidade, Reutilização e Performance em uma só Biblioteca!"
          />
        </main>
      </div>
    </div>
  )
}
