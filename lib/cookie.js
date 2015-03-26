/**
 *  Modified from the jquery cookie plugin.
 *
 *  https://github.com/carhartl/jquery-cookie
 */
'use strict';

var pluses = /\+/g;

/**
 *  Create a cookie instance.
 *
 *  @param options.raw Do not URI encode the cookie value.
 *  @param options.json Store the cookie value as JSON.
 *  @param options.expires Define lifetime of the cookie in days, default is 30.
 *  @param options.path Define the path where the cookie is valid, default is /.
 *  @param options.domain Define the domain where the cookie is valid.
 *  @param options.secure If true, the cookie transmission requires a
 *  secure protocol (https).
 */
function Cookie(options) {
  this.options = options || {};
  this.options.expires =
    typeof this.options.expires === 'number' ? this.options.expires : 30;
  this.options.path =
    this.options.path !== undefined ? this.options.path : '/';
  this.options.secure = typeof this.options.secure === 'boolean'
    ? this.options.secure : false;
}

var proto = Cookie.prototype;

/**
 *  Set a cookie value.
 *
 *  @param key The cookie key name.
 *  @param value The value for the cookie.
 *  @param options Options to use when setting the cookie.
 */
function set(key, value, options) {
  options = options || this.options;
  var days = parseInt(options.expires || -1);
  if(value !== undefined && typeof value !== 'function') {
    var t = new Date();
    t.setDate((t.getDate() + days));
    var res = (document.cookie = [
      this.encode(key), '=', this.stringify(value),
      // use expires attribute, max-age is not supported by IE
      options.expires ? '; expires=' + t.toUTCString() : '',
      options.path ? '; path=' + options.path : '',
      options.domain ? '; domain=' + options.domain : '',
      options.secure ? '; secure' : ''
    ].join(''));
    return res;
  }
}

/**
 *  Get a cookie value.
 *
 *  @param key The cookie key name.
 *  @param value A converter function used when reading the cookie value.
 */
function get(key, value) {
  var i, parts, name, cookie;
  var result = key ? undefined : {};
  /* istanbul ignore next */
  var cookies = (document.cookie || '').split('; ');
  for (i = 0; i < cookies.length; i++) {
    parts = cookies[i].split('=');
    name = this.decode(parts.shift());
    cookie = parts.join('=');
    if (key && key === name) {
      // if second argument (value) is a function it's a converter
      result = this.read(cookie, value);
      break;
    }
    // prevent storing a cookie that we couldn't decode
    if (!key && (cookie = this.read(cookie)) !== undefined) {
      result[name] = cookie;
    }
  }
  return result;
}

/**
 *  Delete a cookie value.
 *
 *  @param key The cookie key name.
 */
function del(key, options) {
  if(!options) {
    options = {};
    for(var z in this.options) {
      options[z] = this.options[z];
    }
  }
  options.expires = -1;
  this.set(key, '', options);
}

/**
 *  Clear all stored cookies, optionally keeping the
 *  keys in the except array.
 *
 *  @param except Array of keys that should not be deleted.
 *  @param options The cookie options.
 */
function clear(except, options) {
  var keys = this.get(), z;
  except = except || [];
  for(z in keys) {
    if(~except.indexOf(z)) {
      continue;
    }
    this.del(z, options);
  }
}

/**
 *  @private
 */
function encode(s) {
  return this.options.raw ? s : encodeURIComponent(s);
}

/**
 *  @private
 */
function decode(s) {
  return this.options.raw ? s : decodeURIComponent(s);
}

/**
 *  @private
 */
function read(s, converter) {
  var value = this.options.raw ? s : this.parse(s);
  return typeof converter === 'function' ? converter(value) : value;
}

/**
 *  @private
 */
function stringify(value) {
  return this.encode(
    this.options.json ? JSON.stringify(value) : String(value));
}

/**
 *  @private
 */
function parse(s) {
  // this is a quoted cookie as according to RFC2068, unescape
  if(s.indexOf('"') === 0) {
    s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }

  // decode and parse
  try {
    s = decodeURIComponent(s.replace(pluses, ' '));
    return this.options.json ? JSON.parse(s) : s;
  // if we can't decode or parse the cookie it is unusable
  }catch(e) {}
}

// public methods
proto.set = set;
proto.get = get;
proto.del = del;
proto.clear = clear;

// private methods
proto.encode = encode;
proto.decode = decode;
proto.read = read;
proto.stringify = stringify;
proto.parse = parse;

module.exports = Cookie;
