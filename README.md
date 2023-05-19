hexo-cloudinary [![NPM version][npm-image]][npm-url] 
================

> [Hexo] tag to add an image from [Cloudinary] - with [srcset] support

## Install

Install using [npm][npm-url].

```
npm install hexo-cloudinary --save
```

Install using [yarn][yarn-url].

```
yarn add hexo-cloudinary
```

## Usage

```
{% cloudinary src srcset [alt] [class] %}
```

where:
- src - path to image
- srcset - srcset sizes in following format
  - small_width=small_cloudinary_transformation_id;big_width=big_cloudinary_transformation_id
  - default false - no srcset
- alt - image title (optional)
- class - custom class (optional)

## Example

{% cloudinary http://res.cloudinary.com/USER_NAME/image/upload/IMAGE_NAME.png 320px=c_scale,q_auto:good,w_320;640px=c_scale,q_auto:good,w_640 "My image title" "my-image-class" %}

```
<img src="http://res.cloudinary.com/USER_NAME/image/upload/c_scale,q_auto:good,w_640/IMAGE_NAME.png" alt="My image title" srcset="http://res.cloudinary.com/USER_NAME/image/upload/c_scale,q_auto:good,w_320/IMAGE_NAME.png 320w, http://res.cloudinary.com/USER_NAME/image/upload/c_scale,q_auto:good,w_640/IMAGE_NAME.png 640w" sizes="(max-width:320px) 320px,  640px">
```

## License
MIT

[![NPM downloads][npm-downloads]][npm-url]

[homepage]: https://github.com/maliMirkec/hexo-cloudinary
[hexo-cloudinary-link]: https://github.com/maliMirkec/hexo-cloudinary

[srcset]: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images

[npm-url]: https://npmjs.org/package/hexo-cloudinary
[npm-image]: http://img.shields.io/npm/v/hexo-cloudinary.svg?style=flat
[npm-downloads]: http://img.shields.io/npm/dm/hexo-cloudinary.svg?style=flat

[yarn-url]: https://yarnpkg.com/en/package/hexo-cloudinary

[depstat-url]: https://gemnasium.com/maliMirkec/hexo-cloudinary
[depstat-image]: http://img.shields.io/gemnasium/maliMirkec/hexo-∏cloudinary.svg?style=flat

[Hexo]: http://hexo.io/
[Cloudinary]: http://cloudinary.com/
