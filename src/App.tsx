import { Card } from './Card'
import './style.css'

export default function App() {
  const width = 1920
  const height = 1080

  return (
    <>
      <div
        style={{
          aspectRatio: `${width} / ${height}`,
          width: width / 2,
          height: height / 2,
        }}
      >
        <Card />
      </div>
    </>
  )
}
