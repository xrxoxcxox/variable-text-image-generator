export function Card({ preview = false }: { preview?: boolean }) {
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
      <div>Lorem ipsum</div>
    </div>
  )
}
