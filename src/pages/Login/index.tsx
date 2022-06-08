import { Logo } from '../../components/Logo';
import styles from './styles.module.css';

export function Login() {
  return (
    <div className={styles.container}>
      <aside className={styles.contentContainer}>
        <main className={styles.content}>
          <Logo />

          <div className={styles.header}>
            <h1>Login</h1>
            <span>Faça seu login com os dados fornecidos no cadastro!</span>
          </div>

          <form className={styles.loginForm}>
            <label>
              Email
              <input type="email" placeholder="name@exemplo.com"/>
            </label>

            <label>
              Senha
              <input type="password" placeholder="*******"/>
            </label>

            <a href="#" className={styles.loginButton}>Login</a>
            <a href="#" className={styles.forgotPassword}>Esqueci minha senha</a>
          </form>

          <footer className={styles.footer}>
            Ainda não tem uma conta?
            <a href="#">Cadastre-se!</a>
          </footer>
        </main>
      </aside>

      <aside className={styles.ilustration} />
    </div>
  );
}
