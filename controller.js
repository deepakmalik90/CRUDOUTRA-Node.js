module.exports  = function(URL,METHOD,GET,POST)
{
    let response    =   {
                            'status'    :   404,
                            'body'      :   {
                                                'status'    :   0,
                                                'error'     :   'Request not found'
                                            }
                        };

    switch(URL[0])
    {
        case    'me'    :
            resource    =   require('./resource/user');
            response    =   new resource(URL,METHOD,GET,POST);
        break;

        case    'login'     :
        case    'register'  :
            resource    =   require('./resource/auth');
            response    =   new resource(URL,METHOD,GET,POST);
        break;
    }

    return(response);
}