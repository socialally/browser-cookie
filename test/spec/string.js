var Cookie = require('cookie')
  , expect = require('chai').expect;

describe('Cookie:', function() {

  it('should set/get cookie string value', function(done) {
    var cookie = new Cookie();
    var value = cookie.set('mock', 'mock-id');
    var received = cookie.get('mock');
    expect(received).to.be.a('string').that.equals('mock-id');
    done();
  });

  it('should set/get cookie undefined value', function(done) {
    var cookie = new Cookie();
    var value = cookie.set('mock-foo', undefined);
    expect(value).to.eql(undefined);
    var data = cookie.get('mock-foo');
    expect(data).to.eql(undefined);
    done();
  });

});
