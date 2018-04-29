assert = require('assert');
cloudinaryImage = require('../lib/cloudinarytagrender.js');
cheerio = require('cheerio')
var should = require('chai').should()

describe('Cheerio', function () {
    it('cheerio should work', function () {
        const $ = cheerio.load("<ul id=\"fruits\"><li class=\"apple\">Apple</li><li class=\"orange\">Orange</li><li class=\"pear\">Pear</li></ul>")
        assert.equal($('.apple').text(), 'Apple')
    })
})
describe('Hexo Cloudinary Image Tag Plugin', function () {
    it('should return empty if nothing is passed', function () {
        assert.equal(cloudinaryImage.cloudinaryTagRender(""), '')
    })

    it('should return an html image with data-src and the cld-responsive class set', function () {
        html_tag = cloudinaryImage.cloudinaryTagRender(["http://example.com/image.jpg", "auto=w_auto,c_scale", "alt", "cld-responsive", "true"])
        const html = cheerio.load(html_tag)
        assert.equal(html('.cld-responsive').attr('class'), 'cld-responsive')
        assert.equal(html('.cld-responsive').attr('alt'), 'alt')
        assert.equal(html('.cld-responsive').attr('data-src'), 'http://example.com/image.jpg')
    })

    it('should return an html image with srcset and sizes if the responsive parameter is set to false', function () {
        imageTitle = 'MyImageTitle'
        imageClass = 'my-image-class'
        srcImage = 'http://res.cloudinary.com/USER_NAME/image/upload/IMAGE_NAME.png'
        size1 = "320px=c_scale,q_auto:good,w_320"
        size2 = "640px=c_scale,q_auto:good,w_640"
        html_tag = cloudinaryImage.cloudinaryTagRender([srcImage, size1+';'+size2, imageTitle, imageClass, "false"])
        const html = cheerio.load(html_tag)
        assert.equal(html('.cld-responsive').attr('class'), undefined)
        assert.equal(html('.'+imageClass).attr('class'), imageClass)
        assert.equal(html('.'+imageClass).attr('alt'), imageTitle)
        should.exist(html('.'+imageClass).attr('src'))
    })

    it('should return an html image with srcset and sizes if the responsive parameter is not passed', function () {
        imageTitle = 'MyImageTitle'
        imageClass = 'my-image-class'
        srcImage = 'http://res.cloudinary.com/USER_NAME/image/upload/IMAGE_NAME.png'
        size1 = "320px=c_scale,q_auto:good,w_320"
        size2 = "640px=c_scale,q_auto:good,w_640"
        html_tag = cloudinaryImage.cloudinaryTagRender([srcImage, size1+';'+size2, imageTitle, imageClass])
        const html = cheerio.load(html_tag)
        assert.equal(html('.cld-responsive').attr('class'), undefined)
        assert.equal(html('.'+imageClass).attr('class'), imageClass)
        assert.equal(html('.'+imageClass).attr('alt'), imageTitle)
        should.exist(html('.'+imageClass).attr('src'))
    })
})

