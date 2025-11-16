"use client";

import Image from "next/image";
import styles from "./commonStyles.module.css";
import { useLocale } from "next-intl";

interface MainProps {
  onScrollDown: () => void;
}

export default function Main({ onScrollDown }: MainProps) {
  const locale = useLocale();

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.main_container}>
        <Image
          src={`/img/${locale}/main-logo.png`}
          alt="메인로고"
          width={230}
          height={135}
          style={{
            width: "100%",
            maxWidth: "180px",
            maxHeight: "50vh",
            height: "auto",
            objectFit: "contain"
          }}
        />
        <Image
          src={`/img/${locale}/main-mock.png`}
          alt="메인이미지"
          width={940}
          height={542}
          style={{
            width: "200%",
            height: "auto",
            maxWidth: "none",
            maxHeight: "60vh",
            objectFit: "contain",
            transform: "translateX(5%)"
          }}
        />
      </div>
      <div
        style={{
          marginTop: "-6.5rem",
          position: "relative",
          width: "65px",
          height: "65px"
        }}
      >
        <Image src="/img/main-btn.png" alt="스냅 버튼" width={65} height={65} />
        <div
          onClick={onScrollDown}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            cursor: "pointer",
            zIndex: 10
          }}
        />
      </div>
    </div>
  );
}
