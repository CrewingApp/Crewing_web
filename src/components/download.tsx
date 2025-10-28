import Image from "next/image";
import styles from "./commonStyles.module.css";

export default function Download() {
  const APP_STORE_URL =
    "https://apps.apple.com/kr/app/crewing-%EC%8A%B9%EB%AC%B4%EC%9B%90-%EC%8A%A4%EC%BC%80%EC%A4%84-%EC%95%B1/id6752578142";
  const GOOGLE_PLAY_URL = "";

  return (
    <div className={styles.download_wrapper}>
      <Image src="/img/main-logo.png" alt="메인로고" width={251} height={155} />

      <div className={styles.download_btn_container}>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadBtn}
        >
          <Image src="/icon/ic-apple.svg" alt="App Store" width={18} height={22} />
          <p className={styles.download_btn}>App Store</p>
        </a>

        <div className={styles.downloadBtn}>
          <Image src="/icon/ic-google.svg" alt="Google Play" width={26} height={27} />
          <p className={styles.download_btn}>Google Play</p>
        </div>
      </div>
    </div>
  );
}
