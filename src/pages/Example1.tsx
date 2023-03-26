import { useEffect, useState } from "react";
import satori from "satori";
import { Example1Image } from "../templates/Example1Image";
import { downloadSvgAsPng } from "../svg-utils";

const notoSans = fetch("./NotoSans-SemiBold.ttf").then((res) =>
  res.arrayBuffer()
);

export default function Example1() {
  const width = 1920;
  const height = 1080;
  const [text, setText] = useState({
    role: "Your Role",
    name: "Your Name",
  });
  const [svgString, setSvgString] = useState("");
  const handleChangeText = (event: { target: HTMLInputElement }) => {
    setText({ ...text, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    (async () => {
      const svg = await satori(<Example1Image role={text.role} name={text.name} />, {
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
          Role
          <input type="text" name="role" onChange={handleChangeText} className="input" />
        </label>
        <label className="inputWrapper">
          Name
          <input type="text" name="name" onChange={handleChangeText} className="input" />
        </label>
        <button type="button" onClick={() => downloadSvgAsPng(svgString)} className="button">
          Download
        </button>
      </div>
    </div>
  );
}