const Api = require('../api');

class User extends Api
{
    constructor(URL,METHOD,GET,POST)
    {
        const resource_list   =   ['location','friend'];
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

    _get()
    {
        this.response   =   {
                    'status'    :   200,
                    'body'      :   {
                                        'status'    :   1,
                                        'data'      :   this.GET
                                    }
                };
        return(this.response);

    }
}

module.exports  =    User;