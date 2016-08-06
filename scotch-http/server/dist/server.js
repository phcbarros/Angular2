'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import multer from 'multer';


var Server = function () {
    function Server() {
        _classCallCheck(this, Server);

        this.app = (0, _express2.default)();
        this.fs = _fs2.default;
        // this.upload = multer({dest: 'uploads/'});
        this.dataFile = _path2.default.join(__dirname, '../data.json');
    }

    _createClass(Server, [{
        key: 'configureApp',
        value: function configureApp() {
            this.app.set('port', process.env.PORT || 3000);
            // this.app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
            this.app.use(_bodyParser2.default.json());
            this.app.use(_bodyParser2.default.urlencoded({ extended: true }));
        }
    }, {
        key: 'configureCORS',
        value: function configureCORS() {
            // Additional middleware which will set headers that we need on each request.
            this.app.use(function (req, res, next) {
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
    }, {
        key: 'configureRoutes',
        value: function configureRoutes() {
            var _this = this;

            // Ignore this
            // this.app.post('/api/image', this.upload.single('image'), (req, res) => {
            //     console.log(req.file);
            //     res.json({image: 'http://localhost:1337/'+req.file.path})
            // });
            this.app.get('/api/comments', function (req, res) {
                _this.fs.readFile(_this.dataFile, function (err, data) {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                    res.json(JSON.parse(data));
                });
            });
            this.app.post('/api/comments', function (req, res) {
                _this.fs.readFile(_this.dataFile, function (err, data) {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                    var comments = JSON.parse(data);

                    var newComment = {
                        id: Date.now(),
                        author: req.body.author,
                        text: req.body.text
                    };

                    comments.push(newComment);
                    _this.fs.writeFile(_this.dataFile, JSON.stringify(comments, null, 4), function (err) {
                        if (err) {
                            console.error(err);
                            process.exit(1);
                        }
                        res.json(comments);
                    });
                });
            });
            this.app.put('/api/comments/:id', function (req, res) {
                _this.fs.readFile(_this.dataFile, function (err, data) {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                    var comments = JSON.parse(data);
                    var idIndex = 0;
                    var findCommentById = comments.filter(function (comment) {
                        if (comment.id == req.params.id) {
                            idIndex = comments.indexOf(comment);
                            return comment;
                        }
                    });
                    findCommentById[0].text = req.body.text;
                    findCommentById[0].author = req.body.author;

                    comments.splice(idIndex, 1, findCommentById[0]);
                    _this.fs.writeFile(_this.dataFile, JSON.stringify(comments, null, 4), function (err) {
                        if (err) {
                            console.error(err);
                            process.exit(1);
                        }
                        res.json(comments);
                    });
                });
            });
            this.app.delete('/api/comments/:id', function (req, res) {
                _this.fs.readFile(_this.dataFile, function (err, data) {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    }
                    var comments = JSON.parse(data);
                    var idIndex = null;
                    var findCommentById = comments.filter(function (comment) {
                        if (comment.id == req.params.id) {
                            idIndex = comments.indexOf(comment);
                            return comment;
                        }
                    });

                    if (idIndex >= 0) {
                        comments.splice(idIndex, 1);
                    }

                    _this.fs.writeFile(_this.dataFile, JSON.stringify(comments, null, 4), function (err) {
                        if (err) {
                            console.error(err);
                            process.exit(1);
                        }
                        res.json(comments);
                    });
                });
            });
        }
    }, {
        key: 'listen',
        value: function listen(port) {
            this.app.listen(port, function () {
                console.log('Server started: http://localhost:' + port + '/');
            });
        }
    }, {
        key: 'run',
        value: function run() {
            this.configureApp();
            this.configureCORS();
            this.configureRoutes();
            this.listen(this.app.get('port'));
        }
    }]);

    return Server;
}();

exports.default = Server;