// {% cloudinary src false|sizes [alt] [class] %}
function cloudinaryTagRender(args) {
  if (!args[0]) {
    return "";
  }

  const imgSrc = args[0];
  const imgSizes = args[1] || "false";
  const imgAlt = args[2] || "";
  const imgClass = args[3] || "";

  if (imgSizes === "false") {
    return (
      '<p><img src="' +
      imgSrc +
      '" class="' +
      imgClass +
      '" alt="' +
      imgAlt +
      '"></p>'
    );
  } else {
    let currentImgSrcset = "";
    let currentImgSizes = "";
    let currentImgSrc = "";
    let sizes = imgSizes.split(";");

    for (let i = 0; i < sizes.length; i++) {
      const size = sizes[i].split("=");
      currentImgSrc = imgSrc.replace("upload/", "upload/" + size[1] + "/");
      const separator = i + 1 === sizes.length ? "" : ", ";
      const mediaQuery =
        i + 1 === sizes.length ? "" : "(max-width:" + size[0] + ")";
      currentImgSrcset +=
        currentImgSrc + " " + size[0].replace("px", "w") + separator;
      currentImgSizes += mediaQuery + " " + size[0] + separator;
    }

    return (
      '<p><img src="' +
      currentImgSrc +
      '" class="' +
      imgClass +
      '" alt="' +
      imgAlt +
      '" srcset="' +
      currentImgSrcset +
      '" sizes="' +
      currentImgSizes +
      '"></p>'
    );
  }
}

hexo.extend.tag.register("cloudinary", cloudinaryTagRender);
