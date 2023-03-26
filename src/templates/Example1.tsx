import background from "/example-1-background.png";

export function Example1({ role, name }: { role?: string; name?: string }) {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
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
