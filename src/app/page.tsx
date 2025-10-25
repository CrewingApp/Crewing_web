import Main from "@/components/main";
import Features from "@/components/features";
import Download from "@/components/download";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      <Main />
      <Features />
      <div style={{ marginTop: "auto" }}>
        <Download />
      </div>
    </div>
  );
}
