const api = require('../Controller/api');

module.exports = app => {
    app.post('/api/users/create', (req, res) => api.createUser(req, res));
    app.get('/api/users/get/:id', (req, res) => api.getUserById(req, res));
    app.get('/api/users/get', (req, res) => api.getUser(req, res));
    app.post('/api/users/update', (req, res) => api.updateUser(req, res));
    app.get('/api/users/delete/:id', (req, res) => api.deleteUser(req, res));
    app.get('/api/users/filter/name/:name', (req, res) => api.filterName(req, res));
    app.get('/api/users/filter/gender/:name', (req, res) => api.filterGender(req, res));
    app.get('/api/users/filter/age/:name', (req, res) => api.filterAge(req, res));
    app.get('/api/users/filter/profession/:name', (req, res) => api.filterProfession(req, res));
    app.get('/api/users/filter/city/:name', (req, res) => api.filterCity(req, res));
    app.get('/api/users/filter/many', (req, res) => api.filterMany(req, res));
};
