import http from 'http';

const server = http.createServer((req, res) => {
     if (req.url === '/'&& req.method === 'GET')
        res.end('Home Page');
    else if (req.url === '/product' && req.method === 'GET'){
        const products = [
            { id: 1, name: 'mobile', price: 2000, },
            { id: 2, name: 'duster', price: 10, },
        ];
        res.end(JSON.stringify(products));
    }
    else if (req.url === '/product' && req.method === 'POST')
        let body ;
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        const product = JSON.parse(body);
        res.end(`Product added: ${product.name}`);
    });
        res.end('add product');
    else if (req.url === '/product' && req.method === 'PUT')
        res.end('update product');
    else if (req.url === '/product' && req.method === 'DELETE')
        res.end('remove product');
    else{
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => {
  console.log('prg 11 running on port 3000');
});
