module.exports = function (cwd) 
{
	function normalize(cwd)
	{
		if (cwd[cwd.length-1] == "\\" || cwd[cwd.length-1] == "/")
			return cwd.substr(0,cwd.length-1);
		return cwd;
	}

	function lastSlash(str)
	{
    	var i = str.lastIndexOf("\\");
    	if (i >= 0)
        	return i;
    	return str.lastIndexOf("/");
	}

	var paths = [];

	function buildPath(dir)
	{
		var i = lastSlash(dir);
		if (i == -1)
		{
			if (dir.trim() != "")
				paths.push(dir)
		}
		else if (i == 0)
		{
			paths.push(dir);
			paths.push(dir.substr(0,dir.length - (dir.length-1)));
		}
		else
		{
			paths.push(dir);
			dir = dir.substr(0, i);
			buildPath(dir);
		}
	}
	
	buildPath(normalize(cwd));
	return paths;
}