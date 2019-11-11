module.exports  = function(response,URL,METHOD,GET,POST)
{
    let responseArray        =   {
                                    'status'    :   404,
                                    'body'      :   {
                                                        'status'    :   0,
                                                        'data'      :   {error_code:10,error:'Request not found'}
                                                    }
                                };

    try
    {
        switch(URL[0])
        {
            case    'inventory'    :
                resource    =   require('./resource/inventory');
                new resource(response,URL,METHOD,GET,POST);
            break;
    
            case    'login'     :
                resource    =   require('./resource/auth');
                new resource(response,URL,METHOD,GET,POST);
            break;

            default:
                return responseArray;
        }
    }
    catch(e)
    {
        responseArray.body.status    =   500;
        responseArray.body.data      =   {error_code:11,error:"Internal Server Error"};
        console.log(e);
        return responseArray;
    }

}