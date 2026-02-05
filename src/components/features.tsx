"use client";

import styles from "./commonStyles.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("features");

  // 볼드 텍스트 파싱 함수
  const parseBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|__.*?__)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const boldText = part.slice(2, -2);
        return (
          <span key={i} className={styles.feature_title_bold}>
            {boldText}
          </span>
        );
      } else if (part.startsWith("__") && part.endsWith("__")) {
        const semiBoldText = part.slice(2, -2);
        return (
          <span key={i} className={styles.feature_title_semi_bold}>
            {semiBoldText}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  // 줄바꿈 함수
  const renderDescription = (description: string) => {
    return description.split("\n").map((line, i, arr) => (
      <span key={i}>
        {parseBoldText(line)}
        {i < arr.length - 1 && <br />}
      </span>
    ));
  };

  const renderTitleWithBold = (text: string) => {
    return text.split("\n").map((line, i, arr) => (
      <span key={i}>
        {parseBoldText(line)}
        {i < arr.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className={styles.feature_wrapper}>
      {/* 캘린더  */}
      <div className={styles.feature_section_full_width}>
        <div className={styles.context_container}>
          <div className={styles.name_container}>
            <Image src="/icon/ic-flight.svg" alt="flight" width={28} height={28} />
          </div>
          <p className={styles.feature_title}>{renderTitleWithBold(t("calendar.title"))}</p>
          <p className={styles.feature_description}>
            {renderDescription(t("calendar.description"))}
          </p>
          <div className={styles.calendar_mode_buttons}>
            <Image
              src="/img/stack-mode.png"
              alt="스택 모드"
              width={64}
              height={50}
              className={styles.mode_button_image}
            />
            <Image
              src="/img/detail-mode.png"
              alt="상세 모드"
              width={64}
              height={50}
              className={styles.mode_button_image}
            />
          </div>
          <div className={styles.calendar_description_text}>
            <span>{renderDescription(t("calendar.stackDescription"))}</span>
            <Image src="/icon/ic-change.svg" alt="change" width={14} height={11} />
            <span>{renderDescription(t("calendar.detailDescription"))}</span>
          </div>
        </div>

        <div className={styles.calendar_images_container}>
          <Image src="/img/calendar.png" alt="캘린더" width={1000} height={1000} />
        </div>
      </div>

      {/* 코드  */}
      <div className={styles.feature_section_full_width}>
        <div className={styles.context_container}>
          <div className={styles.name_container}>
            <Image src="/icon/ic-calendar.svg" alt="calendar" width={28} height={28} />
          </div>
          <p className={styles.feature_title}>{renderTitleWithBold(t("code.title"))}</p>
          <p className={styles.feature_description}>{renderDescription(t("code.description"))}</p>
          <div className={styles.code_search_input}>{t("code.searchPlaceholder")}</div>
        </div>
      </div>

      {/* 친구 */}
      <div className={styles.feature_section_full_width}>
        <div className={styles.context_container}>
          <div className={styles.name_container}>
            <Image src="/icon/ic-friends.svg" alt="friends" width={28} height={28} />
          </div>
          <p className={styles.feature_title}>{renderTitleWithBold(t("friends.title"))}</p>
          <p className={styles.feature_description}>
            {renderDescription(t("friends.description"))}
          </p>
        </div>
        <div className={styles.feature_image_container}>
          <Image
            src="/img/friends.png"
            alt="friends"
            width={300}
            height={1000}
            className={styles.feature_image_item}
          />
        </div>
      </div>

      {/* 메모 */}
      <div className={styles.feature_section_full_width}>
        <div className={styles.context_container}>
          <div className={styles.name_container}>
            <Image src="/icon/ic-diary.svg" alt="memo" width={28} height={28} />
          </div>
          <p className={styles.feature_title}>{renderTitleWithBold(t("memo.title"))}</p>
          <p className={styles.feature_description}>{renderDescription(t("memo.description"))}</p>
        </div>
        <div className={styles.feature_image_container}>
          <Image
            src="/img/memo.png"
            alt="memo"
            width={300}
            height={1000}
            className={styles.feature_image_item}
          />
        </div>
      </div>
    </div>
  );
}
