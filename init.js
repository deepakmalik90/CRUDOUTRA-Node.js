const http          =   require('http');
const controller    =   require('./controller');
const hostname  =   '127.0.0.1';
const port      =   3001;

const server    =   http.createServer();
    
server.on('request',(request, response) => {

    const { url,method }  =    request;

    let splitStringArray    =   url.split('?');

    let URL         =   splitStringArray[0].split('/').filter(Boolean);

    let GET         =   {}
    if(splitStringArray[1]!==undefined)
    {
        splitStringArray[1].split('&').forEach(element => {
            t               =   element.split('=')
            if(t[1]!==undefined)
            {
                GET[t[0]]   =   t[1]; 
            }
            
        });
    }

    let body    =   [];

    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {

        let POST            =   Buffer.concat(body).toString();

        response.setHeader('Content-Type', 'application/json');
        response.setHeader('Access-Control-Allow-Origin', '*');

        responseArray           =   controller(response,URL,method,GET,POST);
        if(responseArray)
        {
            response.statusCode =   responseArray.status;
            response.write(JSON.stringify(responseArray.body),null,3);
            response.end();
        }

    });
 
});

server.listen(port, hostname);



