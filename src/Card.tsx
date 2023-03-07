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
        display: 'flex',
        fontSize: preview ? 50 : 100,
        height: '100%',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <div>{text}</div>
    </div>
  )
}
