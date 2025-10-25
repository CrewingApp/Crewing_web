import styles from "./commonStyles.module.css";
import Image from "next/image";
export default function Features() {
  return (
    <div className={styles.feature_wrapper}>
      {/* 비행 일정 */}
      <div>
        <div className={styles.context_container}>
          <div className={styles.name_container}>
            <Image src="/icon/ic-flight.svg" alt="flight" width={28} height={28} />
            <p className={styles.feature_name}>Flight Board</p>
          </div>
          <p className={styles.feature_title}>직관적인 비행 일정 확인</p>
          <p className={styles.feature_description}>
            비행 일정을 한눈에 정리해주는 메인 보드
            <br />
            편명부터 비행 시간, 현지 날씨까지
            <br />
            필요한 정보만 깔끔하게 확인하세요.
          </p>
        </div>
        <Image
          src="/img/flight-info.png"
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
            <Image src="/icon/ic-calendar.svg" alt="flight" width={28} height={28} />
            <p className={styles.feature_name}>Calendar</p>
          </div>
          <p className={styles.feature_title}>간편한 비행 등록 캘린더</p>
          <p className={styles.feature_description}>
            퀵턴, 오버레이 비행 유형별로
            <br />
            손쉽게 비행 스케줄을 등록해보세요.
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
            <Image src="/icon/ic-diary.svg" alt="flight" width={28} height={28} />
            <p className={styles.feature_name}>Flight Diary</p>
          </div>
          <p className={styles.feature_title}>비행 일기</p>
          <p className={styles.feature_description}>
            사진과 메모로 남기는 나만의 비행 로그
            <br />
            비행 후의 감정과 기억을 한 페이지에 담아보세요.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="/img/diary.png"
            alt="flight-board"
            width={1000}
            height={1000}
            style={{ width: "85%", height: "auto", marginTop: "2.7rem" }}
          />
        </div>
      </div>
    </div>
  );
}
