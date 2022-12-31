import styles from "./css/loading/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading__container}>
      <div className="spinner-border text-light" role="status">
        {/* loading spinner */}
      </div>

      {/* loading text */}
      <p>영화 데이터를 불러오고 있습니다!</p>
    </div>
  );
};

export default Loading;
