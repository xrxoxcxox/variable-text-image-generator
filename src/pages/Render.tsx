import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import satori from "satori";
import { routes } from "../routes";
import { BlankImage } from "../templates/BlankImage";
import { downloadSvgAsPng } from "../utils/image-processing";

export default function Render() {
  // Processing for dynamic routing
  const current = useLocation();
  const currentRouteValues = routes.find(
    (route) => `/${route.path}` === current.pathname
  );
  const values = currentRouteValues?.values ?? {};
  const Template = currentRouteValues?.template ?? BlankImage;

  // Processing for generating images with satori
  const allValues = routes.reduce((accumulator, route) => {
    return { ...accumulator, ...route.values };
  }, {});
  const [text, setText] = useState({
    ...allValues,
  });
  const [svgString, setSvgString] = useState("");
  const handleChangeText = (event: { target: HTMLInputElement }) => {
    setText({ ...text, [event.target.name]: event.target.value });
  };
  const notoSans = fetch("./NotoSans-SemiBold.ttf").then((res) =>
    res.arrayBuffer()
  );

  useEffect(() => {
    (async () => {
      const svg = await satori(<Template {...text} />, {
        width: 1920,
        height: 1080,
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
    <>
      <div
        className="image"
        dangerouslySetInnerHTML={{ __html: svgString }}
      />
      <div className="control">
        {Object.entries(values).map(([key]) => (
          <label className="label" key={key}>
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
    </>

  );
}
