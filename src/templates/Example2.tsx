import background from "/example-2-background.png";

export function Example2({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "160px 96px 40px",
        width: "100%",
      }}
    >
      <div style={{ fontSize: 160, lineHeight: 1, textAlign: "center" }}>
        {title}
      </div>
      <div style={{ fontSize: 40, marginTop: 120 }}>{subtitle}</div>
    </div>
  );
}
