// {% cloudinary src true|false [class, alt] %}
function cloudinaryTagRender(args) {
  if (!args[0]) {
    return "";
  }

  const imgSrc = args[0];
  const imgIsResponsive = args[1];
  const imgClass = args[2].class;
  const imgAlt = args[2].alt;

  if (imgIsResponsive === "true" && theme.cloudinary.sizes) {
    let imgSrcset = "";
    let imgSizes = "";
    let iterator = 1;
    let sizesLength = theme.cloudinary.sizes.length;

    for (let size in theme.cloudinary.sizes) {
      let size = theme.cloudinary.sizes[i];
      let currentImgSrc = imgSrc.replace(
        "upload/",
        "upload/" + theme.cloudinary.sizes[size] + "/"
      );
      let separator = iterator === sizesLength ? "" : ", ";
      let mediaQuery = iterator === sizesLength ? "" : "(may-width: )" + size;

      imgSrcset += currentImgSrc + " " + size + separator;
      imgSizes += mediaQuery + " " + size + separator;

      iterator++;
    }

    return (
      '<img src="' +
      imgSrc +
      '" class="' +
      imgClass +
      '" alt="' +
      imgAlt +
      '" srcset="' +
      imgSrcset +
      '" sizes="' +
      imgSizes +
      '">'
    );
  } else {
    return (
      '<img src="' + imgSrc + '" class="' + imgClass + '" alt="' + imgAlt + '">'
    );
  }
}

hexo.extend.tag.register("cloudinary", cloudinaryTagRender);
