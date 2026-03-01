import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import styles from "./LoginForm.module.css";

export const LoginForm = ({
  onLogin,
}: {
  onLogin: (email: string) => void;
}) => {
  const [isEmailMode] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        onLogin(result.user.email || "");
      } else {
        const result = await signInWithEmailAndPassword(auth, email, password);
        onLogin(result.user.email || "");
      }
    } catch (err: any) {
      setError(
        isRegistering ? "Ошибка регистрации" : "Неверный email или пароль",
      );
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      onLogin(result.user.email || "");
    } catch (err: any) {
      setError("Ошибка входа через Google");
    }
  };

  return (
    <div className={styles.container}>
      <h2>
        {isEmailMode
          ? isRegistering
            ? "Регистрация через Email"
            : "Вход через Email"
          : "Вход через Google"}
      </h2>

      {isEmailMode ? (
        <form onSubmit={handleEmailSubmit}>
          <input
            className={styles.input}
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.input}
            type='password'
            placeholder='Пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button className={styles.button} type='submit'>
              {isRegistering ? "Зарегистрироваться" : "Войти"}
            </button>
            <button
              className={styles.switch}
              type='button'
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering
                ? "Уже есть аккаунт? Войти"
                : "Нет аккаунта? Зарегистрироваться"}
            </button>
          </div>
        </form>
      ) : (
        <button className={styles.button} onClick={handleGoogleLogin}>
          Войти через Google
        </button>
      )}

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
