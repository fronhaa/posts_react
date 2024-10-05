import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            publication={true}
            author="Bruno da Rosa Faller"
            conteudo="Teste"
            avatarUrl="http://github.com/fallerbruno.png"
            authorRole="Professor Crie TI"
          />

          <Post
            publication={false}
            author="Marcelo Martiniano"
            conteudo="Teste"
            avatarUrl="http://github.com/fronhaa.png"
            authorRole="Profissional em desenvolvimento web"
            avatarUrlComment="http://github.com/marcelo.png"
            authorComment="Juca Bala"
            authorRoleComment="Professor de piadas"
          />

          <Post
            publication={false}
            author="Sol"
            conteudo="Teste"
            avatarUrl="http://github.com/solene.png"
            authorRole="Profissional de Marketing"
            avatarUrlComment="http://github.com/fronhaa.png"
            authorComment="Fronha"
            authorRoleComment="Profissional em desenvolvimento web"
          />
        </main>
      </div>
    </>
  );
}
export default App;
