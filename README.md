# pathwalker

Return all the parent directories of a directory.

# usage

``` js
var pathwalker = require('pathwalker');

var directories = pathwalker("/path/to/dir");

//or

var directories = pathwalker("c:\\path\\to\\dir");

//or

var directories = pathwalker("c:/path/to/dir");
console.dir(directories);
```

***

```
# OUTPUTS
[ "/path/to/dir", "/path/to", "/path", "/"]

[ "c:\\path\\to\\dir", "c:\\path\\to", "c:\\path", "c:"]

[ "c:/path/to/dir", "c:/path/to", "c:/path", "c:"]
```

## pathwalker(cwd)

Breakes the string in its slashes to return an array of the parent directories of "cwd".

# install

With [npm](http://npmjs.org) do:

```
npm install pathwalker
```

# license

MIT