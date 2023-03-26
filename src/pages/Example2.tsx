import { useEffect, useState } from "react";
import satori from "satori";
import { Example2Image } from "../templates/Example2Image";
import { downloadSvgAsPng } from "../svg-utils";

const notoSans = fetch("./NotoSans-SemiBold.ttf").then((res) =>
  res.arrayBuffer()
);

export default function Example2() {
  const width = 1920;
  const height = 1080;
  const [text, setText] = useState({
    title: "Here's an example sentence",
    subtitle: "Secondary example sentences",
  });
  const [svgString, setSvgString] = useState("");
  const handleChangeText = (event: { target: HTMLInputElement }) => {
    setText({ ...text, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    (async () => {
      const svg = await satori(<Example2Image title={text.title} subtitle={text.subtitle} />, {
        width: width,
        height: height,
        fonts: [
          {
            name: "Noto Sans",
            data: await notoSans,
          },
        ],
      });
      setSvgString(svg);
    })();
  }, [text]);

  return (
    <div className="container">
      <div
        style={{
          aspectRatio: `${width} / ${height}`,
        }}
        className="imageWrapper"
        dangerouslySetInnerHTML={{ __html: svgString }}
      />
      <div className="formWrapper">
        <label className="inputWrapper">
          Title
          <input type="text" name="title" onChange={handleChangeText} className="input" />
        </label>
        <label className="inputWrapper">
          Subtitle
          <input type="text" name="subtitle" onChange={handleChangeText} className="input" />
        </label>
        <button type="button" onClick={() => downloadSvgAsPng(svgString)} className="button">
          Download
        </button>
      </div>
    </div>
  );
}
