var Cookie = require('cookie')
  , expect = require('chai').expect;

describe('Cookie:', function() {

  it('should get object map', function(done) {
    var cookie = new Cookie();
    cookie.set('foo1', 'bar1');
    cookie.set('foo2', 'bar2');
    cookie.set('foo3', 'bar3');
    var data = cookie.get();
    expect(data).to.be.an('object');
    expect(data.foo1).to.eql('bar1');
    expect(data.foo2).to.eql('bar2');
    expect(data.foo3).to.eql('bar3');
    done();
  });

});
