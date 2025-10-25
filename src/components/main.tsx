import Image from "next/image";
import styles from "./main.module.css";

export default function Main() {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.main_container}>
        <Image src="/img/main-logo.png" alt="메인로고" width={251} height={155} />
        <Image src="/img/main-mock.png" alt="메인이미지" width={390} height={680} />
      </div>
    </div>
  );
}
