const Api = require('../api');

class Auth extends Api
{
    constructor(URL,METHOD,GET,POST)
    {
        super(URL,METHOD,GET,POST);
    }
}

module.exports  =    Auth;