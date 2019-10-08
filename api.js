class Api
{
    constructor(URL,METHOD,GET,POST,resource_list)
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
        this.resource_list  = resource_list;
        
        return(this.init());

    }

    init()
    {
        if(this._validate_resource(this.resource_list))
        {
            return(this.response);
        }

        switch(this.METHOD)
        {
            case 'GET'      :
                this.response   =   this._get();
            break;    
            case 'POST'     :
                this.response   =   this._post();
            break;    
            case 'PUT'      :
                this.response   =   this._put();
            break;    
            case 'DELETE'   :
                this.response   =   this._delete();
            break;    
        }

        return(this.response);
    }

    _validate_resource(resource_list)
    {
        this.URL.forEach(item => {
            if(resource_list[item]===undefined)
                return(true);
        });

        return false;
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