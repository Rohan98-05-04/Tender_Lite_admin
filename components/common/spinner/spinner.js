import styles from "./commonLoader.module.css"

export default function Spinner() {
  return (
    <>
    {/* <div className={styles.loading} /> */}
    <div className={styles.loader}>
      <img src="/img/recLogoPng2.png" alt="Loading" className={styles.loaderImage} />
    </div>
    
    </>
  );
}
