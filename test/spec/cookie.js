var Cookie = require('cookie')
  , expect = require('chai').expect;

describe('Cookie:', function() {
  var cookie = new Cookie();

  it('should verify default cookie options', function(done) {
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

  it('should set/get cookie value', function(done) {
    var value = cookie.set("visitor", "visitor-id");
    var received = cookie.get("visitor");
    expect(received).to.be.a('string').that.equals("visitor-id");
    done();
  });

  it('should set/delete/get null cookie value', function(done) {
    var value = cookie.set("visitor", "new-visitor-id");
    cookie.del("visitor", {path: '/'});
    var received = cookie.get("visitor");
    expect(received).to.be.null;
    done();
  });

});
