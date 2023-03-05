import satori from 'satori'
import { Card } from './Card'
import { downloadSvgAsPng } from './svg-utils'
import './style.css'

const notoSansJP = fetch('/NotoSansJP-Regular.otf').then((res) =>
  res.arrayBuffer()
)

export default function App() {
  const width = 1920
  const height = 1080

  const handleClick = async () => {
    const svg = await satori(<Card />, {
      width: width,
      height: height,
      fonts: [
        {
          name: 'Noto Sans JP',
          data: await notoSansJP,
        },
      ],
    })
    downloadSvgAsPng(svg)
  }

  return (
    <>
      <div
        style={{
          aspectRatio: `${width} / ${height}`,
          width: width / 2,
          height: height / 2,
        }}
      >
        <Card preview={true} />
      </div>
      <button onClick={handleClick}>Download</button>
    </>
  )
}
