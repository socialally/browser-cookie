var Cookie = require('cookie')
  , expect = require('chai').expect;

describe('Cookie:', function() {
  var cookie = new Cookie();

  it('should delete cookie value', function(done) {
    var value = cookie.set("visitor", "new-visitor-id");
    cookie.del("visitor");
    var received = cookie.get("visitor");
    expect(received).to.be.null;
    done();
  });

  it('should delete cookie value w/options', function(done) {
    var value = cookie.set("visitor", "new-visitor-id");
    cookie.del("visitor", {path: '/'});
    var received = cookie.get("visitor");
    expect(received).to.be.null;
    done();
  });

});
