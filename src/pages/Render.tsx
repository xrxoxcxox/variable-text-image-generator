import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import satori from "satori";
import { routes } from "../routes";
import { downloadSvgAsPng } from "../svg-utils";
import { BlankImage } from "../templates/BlankImage";

export default function Render() {
  const current = useLocation();
  const currentRouteValues = routes.find(
    (route) => route.path === current.pathname
  );
  const values = currentRouteValues?.values ?? {};
  const Template = currentRouteValues?.template ?? BlankImage;
  const allValues = routes.reduce((accumulator, route) => {
    return { ...accumulator, ...route.values };
  }, {});
  const [text, setText] = useState({
    ...allValues,
  });
  const width = 1920;
  const height = 1080;
  const notoSans = fetch("./NotoSans-SemiBold.ttf").then((res) =>
    res.arrayBuffer()
  );
  const [svgString, setSvgString] = useState("");
  const handleChangeText = (event: { target: HTMLInputElement }) => {
    setText({ ...text, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    (async () => {
      const svg = await satori(<Template {...text} />, {
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
  }, [text, Template]);

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
        {Object.entries(values).map(([key]) => (
          <label className="inputWrapper" key={key}>
            {key}
            <input
              key={key}
              type="text"
              name={key}
              onChange={handleChangeText}
              className="input"
            />
          </label>
        ))}
        <button
          type="button"
          onClick={() => downloadSvgAsPng(svgString)}
          className="button"
        >
          Download
        </button>
      </div>
    </div>
  );
}
