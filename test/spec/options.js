var Cookie = require('cookie')
  , expect = require('chai').expect;

describe('Cookie:', function() {

  it('should have default cookie options', function(done) {
    var cookie = new Cookie();

    function assert(options) {
      expect(options).to.be.an('object');
      expect(options).to.have.property('expires')
        .to.be.a('number').that.equals(30);
      expect(options).to.have.property('path')
        .to.be.a('string').that.equals('/');
      expect(options).to.have.property('secure')
        .to.be.a('boolean').that.equals(false);
      expect(options.domain).to.be.undefined;
      expect(options.raw).to.be.undefined;
      expect(options.json).to.be.undefined;
    }
    assert(cookie.options);
    done();
  });

  it('should have cookie options with secure', function(done) {
    var cookie = new Cookie({secure: true});

    function assert(options) {
      expect(options).to.be.an('object');
      expect(options).to.have.property('secure')
        .to.be.a('boolean').that.equals(true);
    }
    assert(cookie.options);
    done();
  });

});
