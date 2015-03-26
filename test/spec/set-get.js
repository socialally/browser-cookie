var Cookie = require('cookie')
  , expect = require('chai').expect;

describe('Cookie:', function() {
  it('should set/get cookie value', function(done) {
    var cookie = new Cookie();
    var value = cookie.set("visitor", "visitor-id");
    var received = cookie.get("visitor");
    expect(received).to.be.a('string').that.equals("visitor-id");
    done();
  });

});
