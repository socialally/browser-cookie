var Cookie = require('cookie')
  , expect = require('chai').expect;

describe('Cookie:', function() {

  it('should get cookie with read converter', function(done) {
    var cookie = new Cookie();
    cookie.set('mock', '1');
    var data = cookie.get('mock', parseInt);
    expect(data).to.eql(1);
    done();
  });

});
