import styles from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>
          <span className={styles.hash}>#</span>contacts
        </h1>
      </div>
      <div className={styles.card}>
        <a
          href='mailto:folomeev.aleksei97@gmail.com'
          className={`${styles.contactItem} ${styles.google}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Google Mail
        </a>
        <a
          href='https://t.me/AlexFoland'
          className={`${styles.contactItem} ${styles.telegram}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Telegram
        </a>
        <a
          href='https://wa.me/996556206203'
          className={`${styles.contactItem} ${styles.whatsapp}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          WhatsApp
        </a>
        <a
          href='https://instagram.com/foland2025'
          className={`${styles.contactItem} ${styles.instagram}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Instagram
        </a>
      </div>
    </div>
  );
};
