import Image from "next/image";
import styles from "./commonStyles.module.css";

export default function Download() {
  return (
    <div className={styles.download_wrapper}>
      <Image src="/img/main-logo.png" alt="메인로고" width={251} height={155} />

      <div className={styles.download_btn_container}>
        <div className={styles.downloadBtn}>
          <Image src="/icon/ic-apple.svg" alt="App Store" width={18} height={22} />
          <p className={styles.download_btn}>App Store</p>
        </div>
        <div className={styles.downloadBtn}>
          <Image src="/icon/ic-google.svg" alt="Google Play" width={26} height={27} />
          <p className={styles.download_btn}>Google Play</p>
        </div>
      </div>
    </div>
  );
}
