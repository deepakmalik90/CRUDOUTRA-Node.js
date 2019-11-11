const Api = require('../api');

class Auth extends Api
{
    constructor(response,URL,METHOD,GET,POST)
    {
        const resource_list   =   [];
        super(response,URL,METHOD,GET,POST,resource_list);
    }

    async _post()
    {
        let self            =   this;
        let data            =   self.POST;
        let responseArray   =   {
                                    'status'    :   200,
                                    'body'      :   {
                                                        'status'    :   0,
                                                        'data'      :   {error_code:300,error:'Not a valid username/password'}
                                                    }
                                };  
        let connection;
        try 
        {
            const mysql         =   require('mysql');
               
            const connection =  await mysql.createConnection({
                                    host        :   '127.0.0.1',
                                    user        :   'root',
                                    password    :   'root',
                                    database    :   'dev'
                                });
            

            connection.query('SELECT id from user_accounts where user="'+data.user+'" and password="'+data.password+'"', function(err, results,fields) {

                if(results.length !=0 && results[0].id !=='undefined')
                {
                    responseArray   =   {
                                            'status'    :   200,
                                            'body'      :   {
                                                                'status'    :   1,
                                                                'data'      :   {id:results[0].id}
                                                            }
                                        };
                }
                
                self._response(responseArray); 
            });
            
        }
        catch(e)
        {
            responseArray.body.status    =   500;
            responseArray.body.data      =   {error_code:301,error:"Internal Server Error"};
            self._response(responseArray); 
        } 
    }
}

module.exports  =    Auth;