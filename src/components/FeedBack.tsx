import { useState, useEffect, FormEvent } from "react";
import styles from "./FeedBack.module.css";
import { ref, push, onValue, serverTimestamp } from "firebase/database";
import { db } from "../firebase";

interface IFeedback {
  id: string;
  message: string;
  createdAt: number;
}

export const FeedBack = () => {
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);
  const [isSending, setIsSending] = useState(false);

  // --- ЛОГИКА ПАГИНАЦИИ ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Количество отзывов на одной странице

  useEffect(() => {
    const feedbackRef = ref(db, "feedbacks");
    return onValue(feedbackRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.keys(data)
          .map((key) => ({ id: key, ...data[key] }))
          .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        setFeedbacks(list);
      }
    });
  }, []);

  // Вычисляем индексы для текущей страницы
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(feedbacks.length / itemsPerPage);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isSending) return;
    setIsSending(true);
    try {
      await push(ref(db, "feedbacks"), {
        message: message.trim(),
        createdAt: serverTimestamp(),
      });
      setMessage("");
      setCurrentPage(1); // Возвращаемся на 1 страницу при новом отзыве
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className={styles.container} id='feedback'>
      <h2 className={styles.title}>
        <span className={styles.hash}>#</span>feedback
      </h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          className={styles.textarea}
          placeholder='Leave your feedback...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type='submit' className={styles.submitBtn} disabled={isSending}>
          {isSending ? "Sending..." : "Send Feedback"}
        </button>
      </form>

      <div className={styles.card}>
        {currentFeedbacks.map((item) => (
          <article key={item.id} className={styles.feedbackItem}>
            {item.message}
          </article>
        ))}
      </div>

      {/* --- БЛОК КНОПОК СТРАНИЦ --- */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={styles.pageBtn}
          >
            &lt;
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`${styles.pageBtn} ${currentPage === i + 1 ? styles.activePage : ""}`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={styles.pageBtn}
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
};
