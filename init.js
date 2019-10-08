const http          =   require('http');
const controller    =   require('./controller');
const hostname  =   '127.0.0.1';
const port      =   3000;

const server    =   http.createServer();
    
server.on('request',(request, response) => {

    const { url,method }  =    request;

    let splitStringArray    =   url.split('?');

    let URL         =   splitStringArray[0].split('/').filter(Boolean);;

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

    let POST        =   {}

    responseArray       =   controller(URL,method,GET,POST);

    response.statusCode     =   responseArray.status;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(responseArray.body),null,3);
    response.end();
  
});

server.listen(port, hostname);



// let body    =   [];

// request.on('error', (err) => {
//     console.error(err);
// }).on('data', (chunk) => {
//     body.push(chunk);
// }).on('end', () => {
//     body  =   Buffer.concat(body).toString();
    
//     response.on('error', (err) => {
//         console.error(err);
//     });

//     response.statusCode =   200;
//     response.setHeader('Content-Type', 'application/json');
//     response.write(JSON.stringify(GET));
//     response.end();

// });