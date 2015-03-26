var Cookie = require('cookie')
  , expect = require('chai').expect;

describe('Cookie:', function() {

  it('should return null on bad decode', function(done) {
    var cookie = new Cookie({raw: true});
    cookie.set('mock', '%%');

    // disable raw to mock error condition
    cookie.options.raw = false;

    var data = cookie.get('mock');
    expect(data).to.eql(null);
    done();
  });

});
