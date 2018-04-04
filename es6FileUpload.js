
const http  = require('http');
const formidable = require('formidable');
const fs  = require('fs');
const url  = require('url');


const server = http.createServer((req, res) => {
    if (req.url == '/fileupload') {
        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            const oldPath = files.filetoupload.path;
            const newPath = '/Users/becky/Desktop/Test/' + files.filetoupload.name;
            fs.rename(oldPath, newPath, (err) => {
                if(err) throw err;
                res.write('Your File have been Uploaded');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<form action="fileupload" method="post" enctype="multipart/form-data"> 
                    <input type="file" name="filetoupload"><br> 
                    <input type="submit"> </form>`);
        return res.end();
    }
})
    server.listen(8080);
