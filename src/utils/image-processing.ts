export const svgToPngURL = (svg: string) =>
  new Promise<string>((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext("2d");
      context?.drawImage(image, 0, 0);
      resolve(canvas.toDataURL("image/png"));
      URL.revokeObjectURL(image.src);
    };
    image.onerror = (e) => {
      reject(e);
      URL.revokeObjectURL(image.src);
    };
    image.src = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  });

export const downloadSvgAsPng = async (svg: string) => {
  const pngURL = await svgToPngURL(svg);
  try {
    const a = document.createElement("a");
    a.href = pngURL;
    a.download = "Image.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } finally {
    URL.revokeObjectURL(pngURL);
  }
};
