var Cookie = require('cookie')
  , expect = require('chai').expect;

describe('Cookie:', function() {

  it('should set cookie value w/ options', function(done) {
    // trigger code paths
    var cookie = new Cookie({path: '/', expires: 0, domain: 'localhost'});
    var value = cookie.set('mock-options', 'mock-value');
    expect(value).to.be.a('string');
    done();
  });

  it('should set cookie value w/ false options', function(done) {
    // trigger code paths
    var cookie = new Cookie(
      {path: false, expires: false, domain: false, secure: true});
    var value = cookie.set('mock-options', 'mock-value');
    expect(value).to.be.a('string');
    done();
  });

});
