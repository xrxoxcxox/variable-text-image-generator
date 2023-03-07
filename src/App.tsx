import { useState } from 'react'
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
  const [cardText, setCardText] = useState('Lorem ipsum')

  const handleChange = (e: { target: { value: string } }) => {
    setCardText(() => e.target.value)
  }

  const handleClick = async () => {
    const svg = await satori(<Card text={cardText} />, {
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
        <Card preview={true} text={cardText} />
      </div>
      <input type='text' onChange={handleChange} />
      <button onClick={handleClick}>Download</button>
    </>
  )
}
