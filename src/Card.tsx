export function Card({
  preview = false,
  role,
  name,
}: {
  preview?: boolean
  role?: string
  name?: string
}) {
  return (
    <div
      style={{
        backgroundColor: '#f0f0f0',
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        padding: preview ? '80px 48px' : '160px 96px',
        width: '100%',
      }}
    >
      <div style={{ fontSize: preview ? 20 : 40 }}>{role}</div>
      <div style={{ fontSize: preview ? 40 : 80, marginTop: preview ? 10 : 20 }}>
        {name}
      </div>
    </div>
  )
}
