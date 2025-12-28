"use client";

import styles from "./commonStyles.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("features");

  // 줄바꿈 함수
  const renderDescription = (description: string) => {
    return description.split("\n").map((line, i, arr) => (
      <span key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className={styles.feature_wrapper}>
      {/* 캘린더  */}
      <div>
        <div className={styles.context_container}>
          <div className={styles.name_container}>
            <Image src="/icon/ic-flight.svg" alt="flight" width={28} height={28} />
          </div>
          <p className={styles.feature_title}>{t("calendar.title")}</p>
          <p className={styles.feature_description}>
            {renderDescription(t("calendar.description"))}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1.2rem",
              padding: "0 3rem",
              width: "100%",
              boxSizing: "border-box"
            }}
          >
            <Image
              src="/img/stack-mode.png"
              alt="스택 모드"
              width={64}
              height={50}
              style={{ height: "auto" }}
            />
            <Image
              src="/img/detail-mode.png"
              alt="상세 모드"
              width={64}
              height={50}
              style={{ height: "auto" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "1rem",
              alignItems: "center",
              color: "#fff",
              fontFamily: "Pretendard, sans-serif",
              fontSize: "1.4rem",
              lineHeight: "2rem"
            }}
          >
            <span>
              바쁜 날에도
              <br /> 빠르게 스케줄을 체크하세요.
            </span>
            <Image src="/icon/ic-change.svg" alt="change" width={20} height={20} />
            <span>
              노선·시간·일정까지 <br /> 자세히, 한눈에 보여드릴게요.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "2.7rem",
            padding: "0 3rem",
            width: "100%",
            boxSizing: "border-box"
          }}
        >
          <Image
            src="/img/stack-calendar.png"
            alt="스택형 캘린더"
            width={1000}
            height={1000}
            style={{ width: "50%", height: "auto" }}
          />
          <Image
            src="/img/detail-calendar.png"
            alt="상세형 캘린더"
            width={1000}
            height={1000}
            style={{ width: "50%", height: "auto" }}
          />
        </div>
      </div>

      {/* 코드  */}
      <div>
        <div className={styles.context_container}>
          <div className={styles.name_container}>
            <Image src="/icon/ic-calendar.svg" alt="calendar" width={28} height={28} />
          </div>
          <p className={styles.feature_title}>{t("code.title")}</p>
          <p className={styles.feature_description}>{renderDescription(t("code.description"))}</p>
          <div className={styles.code_search_input}>공항 코드 또는 편명 검색</div>
        </div>
      </div>

      {/* 친구 */}
      <div style={{ width: "100%" }}>
        <div className={styles.context_container}>
          <div className={styles.name_container}>
            <Image src="/icon/ic-friends.svg" alt="friends" width={28} height={28} />
          </div>
          <p className={styles.feature_title}>{t("friends.title")}</p>
          <p className={styles.feature_description}>
            {renderDescription(t("friends.description"))}
          </p>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "2.7rem", width: "100%" }}
        >
          <Image
            src="/img/friends.png"
            alt="friends"
            width={300}
            height={1000}
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      </div>

      {/* 메모 */}
      <div style={{ width: "100%" }}>
        <div className={styles.context_container}>
          <div className={styles.name_container}>
            <Image src="/icon/ic-diary.svg" alt="memo" width={28} height={28} />
          </div>
          <p className={styles.feature_title}>{t("memo.title")}</p>
          <p className={styles.feature_description}>{renderDescription(t("memo.description"))}</p>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "2.7rem", width: "100%" }}
        >
          <Image
            src="/img/memo.png"
            alt="memo"
            width={300}
            height={1000}
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
