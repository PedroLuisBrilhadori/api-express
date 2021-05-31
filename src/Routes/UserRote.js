const UserController = require('../controller/controllers');

module.exports = (app) => {
    app.post('/Usuario', UserController.post);
    app.put('/Usuario/:id', UserController.put);
    app.delete('/Usuario', UserController.delete);
    app.get('/Usuario', UserController.get);
    app.get('/Usuario/:id', UserController.getById);
}