const Api = require('../api');

class Auth extends Api
{
    constructor(URL,METHOD,GET,POST)
    {
        const resource_list   =   [];
        super(URL,METHOD,GET,POST,resource_list);
    }

    _post()
    {
        this.response   =   {
                                'status'    :   200,
                                'body'      :   {
                                                    'status'    :   1,
                                                    'data'      :   this.POST
                                                }
                            };
        return(this.response);                    

    }

    _put()
    {
        this.response   =   {
                                'status'    :   200,
                                'body'      :   {
                                                    'status'    :   1,
                                                    'data'      :   this.POST
                                                }
                            };
        return(this.response);                    

    }
}

module.exports  =    Auth;