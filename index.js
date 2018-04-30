'use strict';
var cloudinaryTagRenderer = require('./lib/cloudinarytagrender.js');
hexo.extend.tag.register("cloudinary", cloudinaryTagRenderer.cloudinaryTagRender);
