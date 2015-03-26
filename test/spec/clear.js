var Cookie = require('cookie')
  , expect = require('chai').expect;

describe('Cookie:', function() {

  it('should clear cookie values', function(done) {
    var cookie = new Cookie();
    cookie.set('mock1', 'mock-value-1');
    cookie.set('mock2', 'mock-value-2');
    cookie.clear();
    expect(cookie.get('mock1')).to.eql(undefined);
    expect(cookie.get('mock2')).to.eql(undefined);
    done();
  });

  it('should clear cookie values w/ except array', function(done) {
    var cookie = new Cookie();
    cookie.set('mock1', 'mock-value-1');
    cookie.set('mock2', 'mock-value-2');
    cookie.clear(['mock2']);
    expect(cookie.get('mock1')).to.eql(undefined);
    expect(cookie.get('mock2')).to.eql('mock-value-2');
    done();
  });
});
