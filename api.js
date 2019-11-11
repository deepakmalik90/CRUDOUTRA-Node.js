class Api
{
    constructor(response,URL,METHOD,GET,POST,resource_list)
    {
        this.responseArray   =   {
                                    'status'    :   404,
                                    'body'      :   {
                                                        'status'    :   0,
                                                        'data'      :   {error_code:20,error:'Invalid Request'}
                                                    }
                                };


        this.response       =   response;
        this.URL            =   URL;
        this.METHOD         =   METHOD;
        this.GET            =   GET;
        this.POST           =   POST;
        this.resource_list  =   resource_list;
        
        this.init();

    }

    init()
    {
        this._validate_resource(this.resource_list);
       
        switch(this.METHOD)
        {
            case 'GET'      :
                this._get();
            break;    
            case 'POST'     :

                try
                {
                    this.POST       =   JSON.parse(this.POST);
                    this._post();
                }
                catch(e)
                {
                    console.log(e);
                    let responseArray   =   {
                                                'status'    :   200,
                                                'body'      :   {
                                                                    'status'    :   0,
                                                                    'data'      :   {error_code:21,error :'Invalid data'}
                                                                }
                                            };
                    this._response(responseArray);  
                }

            break;    
            case 'PUT'      :
                this._put();
            break;    
            case 'DELETE'   :
                this._delete();
            break; 
            default:
                this._response(this.responseArray);
        }
        
    }

    _validate_resource(resource_list)
    {
        let segments    =   this.URL;
        for (let i = 1; i < this.URL.length; ++i) 
        {
            if(typeof resource_list[segments[i]]===undefined)
            {
                this._response(this.responseArray);
            }
        }
    }

    _get() 
    {
        this._response(this.responseArray);
    }

    _post() 
    {
        this._response(this.responseArray);
    }

    _put() 
    {
        this._response(this.responseArray);
    }

    _delete() 
    {
        this._response(this.responseArray);
    }

     _response(responseArray)
    {
        this.response.statusCode =   responseArray.status;
        this.response.write(JSON.stringify(responseArray.body),null,3);
        this.response.end();
    }
}

module.exports  =   Api;    