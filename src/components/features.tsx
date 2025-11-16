"use client";

import styles from "./commonStyles.module.css";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function Features() {
  const t = useTranslations("features");

  const locale = useLocale();

  return (
    <div className={styles.feature_wrapper}>
      {/* 비행 일정 */}
      <div>
        <div className={styles.context_container}>
          <div className={styles.name_container}>
            <Image src="/icon/ic-flight.svg" alt="flight" width={28} height={28} />
            <p className={styles.feature_name}>{t("flightBoard.name")}</p>
          </div>
          <p className={styles.feature_title}>{t("flightBoard.title")}</p>
          <p className={styles.feature_description}>
            {t("flightBoard.description")
              .split("\n")
              .map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t("flightBoard.description").split("\n").length - 1 && <br />}
                </span>
              ))}
          </p>
        </div>
        <Image
          src={`/img/${locale}/flight-info.png`}
          alt="flight-board"
          width={1000}
          height={1000}
          style={{ width: "100%", height: "auto", marginTop: "2.7rem" }}
        />
      </div>
      {/* 캘린더 */}
      <div>
        <div className={styles.context_container}>
          <div className={styles.name_container}>
            <Image src="/icon/ic-calendar.svg" alt="calendar" width={28} height={28} />
            <p className={styles.feature_name}>{t("calendar.name")}</p>
          </div>
          <p className={styles.feature_title}>{t("calendar.title")}</p>
          <p className={styles.feature_description}>
            {t("calendar.description")
              .split("\n")
              .map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t("calendar.description").split("\n").length - 1 && <br />}
                </span>
              ))}
          </p>
        </div>
        <Image
          src="/img/calendar-btn.png"
          alt="calendar-btn"
          width={175}
          height={33}
          style={{ margin: " 1.4rem 0 1.6rem 3rem " }}
        />
        <Image
          src="/img/calendar.png"
          alt="calendar"
          width={1000}
          height={1000}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      {/* 비행 일기 */}
      <div>
        <div className={styles.context_container}>
          <div className={styles.name_container}>
            <Image src="/icon/ic-diary.svg" alt="diary" width={28} height={28} />
            <p className={styles.feature_name}>{t("diary.name")}</p>
          </div>
          <p className={styles.feature_title}>{t("diary.title")}</p>
          <p className={styles.feature_description}>
            {t("diary.description")
              .split("\n")
              .map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t("diary.description").split("\n").length - 1 && <br />}
                </span>
              ))}
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="/img/diary.png"
            alt="diary"
            width={1000}
            height={1000}
            style={{ width: "85%", height: "auto", marginTop: "2.7rem" }}
          />
        </div>
      </div>
    </div>
  );
}
