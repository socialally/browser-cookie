## Cookie

The `Cookie` class exposes the ability to get, set and delete cookie values.

### Options

* `raw` - Do not URI encode the cookie value.
* `json` - Store the cookie value as JSON.
* `expires` - Define lifetime of the cookie in days, default is 30.
* `path` - Define the path where the cookie is valid, default is /.
* `domain` - Define the domain whether the cookie is valid.
* `secure` - If true, the cookie transmission requires a secure protocol (https).

### Methods

#### cookie.set(key, value, [options])

Sets a cookie value.

#### cookie.get(key, [value])

Gets a cookie value. If the `value` parameter is specified it should be a conversion function, if no key is specified an object containing all key value pairs is returned.

#### cookie.del(key)

Deletes a cookie value.

#### cookie.clear(except, [options])

Clear all cookies except the keys listed in the `except` array.
