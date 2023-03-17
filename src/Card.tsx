export function Card({ role, name }: { role?: string; name?: string }) {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        backgroundImage: "url(/background.png)",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "160px 96px",
        width: "100%",
      }}
    >
      <div style={{ fontSize: 40 }}>{role}</div>
      <div style={{ fontSize: 80, marginTop: 20 }}>{name}</div>
    </div>
  );
}
