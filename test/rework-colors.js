
var rework = require('rework')
  , colors = require('../')
  , fs = require('fs')
  , assert = require('assert')
  , read = fs.readFileSync;

function fixture(name) {
  return read('test/fixtures/' + name + '.css', 'utf8').trim();
}

describe('.colors()', function(){
  it('should support rgba(color, a)', function(){
    rework(fixture('colors'))
      .use(colors())
      .toString()
      .should.equal(fixture('colors.out'));
  })

  it('should support hsb(hue, saturation, value)', function(){
    rework(fixture('colors.hsb'))
      .use(colors())
      .toString()
      .should.equal(fixture('colors.hsb.out'));
  })
})
