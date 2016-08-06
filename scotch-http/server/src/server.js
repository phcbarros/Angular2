import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
// import multer from 'multer';


class Server {
    constructor(){
        this.app = express();
        this.fs = fs;
        // this.upload = multer({dest: 'uploads/'});
        this.dataFile  = path.join(__dirname, '../data.json');
    }

    configureApp() {
        this.app.set('port', (process.env.PORT || 3000));
        // this.app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    configureCORS(){
        // Additional middleware which will set headers that we need on each request.
        this.app.use((req, res, next) => {
            // Set permissive CORS header - this allows this server to be used only as
            // an API server in conjunction with something like webpack-dev-server.
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

            // Disable caching so we'll always get the latest comments.
            res.setHeader('Cache-Control', 'no-cache');
            next();
        });
    }

    configureRoutes(){
      // Ignore this
      // this.app.post('/api/image', this.upload.single('image'), (req, res) => {
      //     console.log(req.file);
      //     res.json({image: 'http://localhost:1337/'+req.file.path})
      // });
        this.app.get('/api/comments', (req, res) => {
            this.fs.readFile(this.dataFile, (err, data) => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                res.json(JSON.parse(data));
            });
        });
        this.app.post('/api/comments', (req, res) => {
            this.fs.readFile(this.dataFile, (err, data) => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                var comments = JSON.parse(data);

                var newComment = {
                    id: Date.now(),
                    author: req.body.author,
                    text: req.body.text,
                };

                comments.push(newComment);
                this.fs.writeFile(this.dataFile, JSON.stringify(comments, null, 4), function(err) {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                    res.json(comments);
                });
            });
        });
        this.app.put('/api/comments/:id', (req, res) => {
            this.fs.readFile(this.dataFile, (err, data) => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                let comments = JSON.parse(data);
                let idIndex = 0;
                let findCommentById = comments.filter(comment => {
                    if(comment.id == req.params.id) {
                        idIndex = comments.indexOf(comment);
                        return comment;
                    }
                });
                findCommentById[0].text = req.body.text;
                findCommentById[0].author = req.body.author;

                comments.splice(idIndex, 1, findCommentById[0]);
                 this.fs.writeFile(this.dataFile, JSON.stringify(comments, null, 4), function(err) {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                    res.json(comments);
                });
            });
        });
        this.app.delete('/api/comments/:id', (req, res) => {
            this.fs.readFile(this.dataFile, (err, data) => {
                if (err) {
                    console.error(err);
                    process.exit(1);
                }
                let comments = JSON.parse(data);
                let idIndex = null;
                let findCommentById = comments.filter(comment => {
                    if(comment.id == req.params.id) {
                        idIndex = comments.indexOf(comment);
                        return comment;
                    }
                });

                if(idIndex >= 0){
                    comments.splice(idIndex, 1);
                }

                 this.fs.writeFile(this.dataFile, JSON.stringify(comments, null, 4), function(err) {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                    res.json(comments);
                });
            });
        });
    }

    listen(port){
        this.app.listen(port, () => {
            console.log(`Server started: http://localhost:${port}/`);
        });
    }

    run(){
        this.configureApp();
        this.configureCORS()
        this.configureRoutes();
        this.listen(this.app.get('port'));
    }
}

export default Server;
