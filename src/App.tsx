import { useEffect, useState } from "react";
import satori from "satori";
import { Card } from "./Card";
import { downloadSvgAsPng } from "./svg-utils";
import "./style.css";

const notoSansJP = fetch("/NotoSansJP-Regular.otf").then((res) =>
  res.arrayBuffer()
);

export default function App() {
  const width = 1920;
  const height = 1080;
  const [text, setText] = useState({
    role: "Human",
    name: "John Doe",
  });
  const [svgString, setSvgString] = useState("");
  const handleChangeText = (event: { target: HTMLInputElement }) => {
    setText({ ...text, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    (async () => {
      const svg = await satori(<Card role={text.role} name={text.name} />, {
        width: width,
        height: height,
        fonts: [
          {
            name: "Noto Sans JP",
            data: await notoSansJP,
          },
        ],
      });
      setSvgString(svg);
    })();
  }, [text]);

  return (
    <>
      <div
        style={{
          aspectRatio: `${width} / ${height}`,
          width: width / 2,
          height: height / 2,
        }}
        className="imageWrapper"
        dangerouslySetInnerHTML={{ __html: svgString }}
      />
      <label>
        Role
        <input type="text" name="role" onChange={handleChangeText} />
      </label>
      <label>
        Name
        <input type="text" name="name" onChange={handleChangeText} />
      </label>
      <button type="button" onClick={() => downloadSvgAsPng(svgString)}>
        Download
      </button>
    </>
  );
}
