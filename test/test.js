var assert = require("assert"),
    pathwalker = require('../index.js');

describe('#pathwalker', function()
{
	it('should output all parent dirs unix path style', function()
	{
		//with ending '/' and starting '/'
  		assert.deepEqual(["/var/www/lucas/me", "/var/www/lucas", "/var/www", "/var","/"] , pathwalker("/var/www/lucas/me/"));

  		//with ending '/' only
  		assert.deepEqual(["var/www/lucas/me", "var/www/lucas", "var/www", "var"] , pathwalker("var/www/lucas/me/"));

  		//with starting '/'
  		assert.deepEqual(["/var/www/lucas/me", "/var/www/lucas", "/var/www", "/var", "/"] , pathwalker("/var/www/lucas/me"));
	});


	it('should output all parent dirs windows path style', function()
	{
		//with back slashes, ending with slashes
  		assert.deepEqual(["c:\\lucas\\ok\\testes", "c:\\lucas\\ok", "c:\\lucas", "c:"] , pathwalker("c:\\lucas\\ok\\testes\\"));

		//with back slashes, without ending slashes
  		assert.deepEqual(["c:\\lucas\\ok\\testes", "c:\\lucas\\ok", "c:\\lucas", "c:"] , pathwalker("c:\\lucas\\ok\\testes"));

		//with forward slashes, ending with slashes
  		assert.deepEqual(["c:/lucas/ok/testes", "c:/lucas/ok", "c:/lucas", "c:"] , pathwalker("c:/lucas/ok/testes/"));

  		//with forward slashes, without ending slashes
  		assert.deepEqual(["c:/lucas/ok/testes", "c:/lucas/ok", "c:/lucas", "c:"] , pathwalker("c:/lucas/ok/testes"));
	});
});