export function Card({
  preview = false,
  text,
}: {
  preview?: boolean
  text?: string
}) {
  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        display: 'flex',
        fontSize: preview ? 50 : 100,
        height: '100%',
        padding: preview ? '80px 48px' : '160px 96px',
        width: '100%',
      }}
    >
      <div>{text}</div>
    </div>
  )
}
