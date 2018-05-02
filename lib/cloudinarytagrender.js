// {% cloudinary src false|sizes [alt] [class] %}
function cloudinaryTagRender(args) {
    if (!args[0]) {
        return "";
    }

    const imgSrc = args[0];
    const imgSizes = args[1] || "false";
    const imgAlt = args[2] || "";
    const imgClass = args[3] || "";
    const responsiveImage = args[4] || false;

    if (responsiveImage === "true") {
        const size = imgSizes.split("=");
        currentImgSrc = imgSrc.replace("upload/", "upload/" + size[1] + "/");

        return (
            '<p><img class="' +
            imgClass +
            '" alt="' +
            imgAlt +
            '" data-src="' +
            currentImgSrc +
            '"></p>'
        );
    } else if (imgSizes === "false") {
        return (
            '<p><img class="' +
            imgClass +
            '" alt="' +
            imgAlt +
            '" src="' +
            imgSrc +
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
            '<p><img class="' +
            imgClass +
            '" alt="' +
            imgAlt +
            '" src="' +
            currentImgSrc +
            '" srcset="' +
            currentImgSrcset +
            '" sizes="' +
            currentImgSizes +
            '"></p>'
        );
    }
}

if (typeof module !== 'undefined' && module.exports != null) {
    exports.cloudinaryTagRender = cloudinaryTagRender;
}