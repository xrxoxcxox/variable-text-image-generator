import { useEffect, useState } from 'react'
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
  const [role, setRole] = useState('Human')
  const [name, setName] = useState('John Doe')
  const [svgString, setSvgString] = useState('')

  const handleChangeRole = (e: { target: { value: string } }) => {
    setRole(() => e.target.value)
  }
  const handleChangeName = (e: { target: { value: string } }) => {
    setName(() => e.target.value)
  }

  const handleClick = () => {
    downloadSvgAsPng(svgString)
  }

  useEffect(() => {
    ;(async () => {
      const svg = await satori(<Card role={role} name={name} />, {
        width: width,
        height: height,
        fonts: [
          {
            name: 'Noto Sans JP',
            data: await notoSansJP,
          },
        ],
      })
      setSvgString(svg)
    })()
  }, [role, name])

  return (
    <>
      <div
        style={{
          aspectRatio: `${width} / ${height}`,
          width: width / 2,
          height: height / 2,
        }}
        className='imageWrapper'
        dangerouslySetInnerHTML={{ __html: svgString }}
      />
      <label>
        Role
        <input type='text' onChange={handleChangeRole} />
      </label>
      <label>
        Name
        <input type='text' onChange={handleChangeName} />
      </label>
      <button onClick={handleClick}>Download</button>
    </>
  )
}
