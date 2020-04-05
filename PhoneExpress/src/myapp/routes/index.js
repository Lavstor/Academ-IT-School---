var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: 'Express'});
});

var id = 1;
var contacts = [];

router.get('/getContacts', function (req, res) {
    var term = (req.query.term || '').toUpperCase();

    res.send({
        contacts: contacts.filter(function (c) {
            return term === '' || c.phone.toUpperCase().indexOf(term) >= 0 ||
                c.name.toUpperCase().indexOf(term) >= 0;
        })
    })
});

router.post('/deleteContact', function (req, res) {
    var id = req.body.id;
    var index = contacts.findIndex(function (c) {
        return c.id === id;
    });

    if (index >= 0) {
        contacts.slice(index[0], 1);
    }

    res.send({})
});

router.post('/addContact', function (req, res) {
    var contact = req.body.request;

    var index = contacts.findIndex(function (c) {
        return c.phone.toUpperCase() === contact.phone.toUpperCase();
    });

    if (index >= 0) {
        res.send({success: false});
        return;
    }

    contact.id = id;
    ++id;
    contacts.push(contact);

    res.send({success: true});
});

module.exports = router;
