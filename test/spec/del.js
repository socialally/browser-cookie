var Cookie = require('cookie')
  , expect = require('chai').expect;

describe('Cookie:', function() {
  var cookie = new Cookie();

  it('should delete cookie value', function(done) {
    var value = cookie.set('visitor', 'new-visitor-id');
    cookie.del('visitor');
    var data = cookie.get('visitor');
    expect(data).to.eql(undefined);
    done();
  });

  it('should delete cookie value w/options', function(done) {
    var value = cookie.set('visitor', 'new-visitor-id');
    cookie.del('visitor', {path: '/'});
    var data = cookie.get('visitor');
    expect(data).to.eql(undefined);
    done();
  });

});
