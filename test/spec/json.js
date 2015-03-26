var Cookie = require('cookie')
  , expect = require('chai').expect;

describe('Cookie:', function() {

  it('should set/get cookie json value', function(done) {
    var cookie = new Cookie({json: true});
    cookie.set('mock', {foo: 'bar'});
    var data = cookie.get('mock');
    expect(data).to.be.an('object');
    expect(data.foo).to.eql('bar');
    done();
  });

});
