import { Post } from './Post';
import { Header } from './componentes/Header';

import './global.css'

export function App() {

  return (
    <div className="App">
      <Header/>

      <Post
        author="Glauber Bandeira"
        content="12 razões para escolher React para seu próximo projeto de desenvolvimento web"
      />
      <Post
        author="Fernando Bandeira"
        content="React: Simplicidade, Reutilização e Performance em uma só Biblioteca!"
      />

    </div>
  )
}
