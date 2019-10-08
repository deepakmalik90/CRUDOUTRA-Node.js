class Api
{
    constructor(URL,METHOD,GET,POST)
    {
        this.response   =   {
                                'status'    :   404,
                                'body'      :   {
                                                    'status'    :   0,
                                                    'error'     :   'Invalid Request'
                                                }
                            };

        this.URL        =   URL;
        this.METHOD     =   METHOD;
        this.GET        =   GET;
        this.POST       =   POST;

        switch(this.METHOD)
        {
            case 'GET'      :
                this.response   =   this._get();
            case 'POST'     :
                this.response   =   this._post();
            case 'PUT'      :
                this.response   =   this._put();
            case 'DELETE'   :
                this.response   =   this._delete();                
        }

        return(this.response);
    }

    _validate_resource(resource)
    {
        this.URL.forEach(u => {
            if(resource[u]===undefined)
                return(false);
        });

        return true;
    }

    _get() 
    {
        return(this.response);
    }

    _post() 
    {
        return(this.response);
    }

    _put() 
    {
        return(this.response);
    }

    _delete() 
    {
        return(this.response);
    }
}

module.exports  =   Api;    