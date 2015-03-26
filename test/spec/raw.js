var Cookie = require('cookie')
  , expect = require('chai').expect;

describe('Cookie:', function() {

  it('should set/get cookie raw value', function(done) {
    var cookie = new Cookie({raw: true});
    cookie.set('mock/1', 'bar');
    var data = cookie.get('mock/1');
    expect(data).to.eql('bar');
    done();
  });

});
