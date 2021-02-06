const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Parties = require('../models/party');

const partyRouter = express.Router();

partyRouter.use(bodyParser.json());

//============================================Router for /parties=================================================
partyRouter.route('/')
.get((req, res, next) => {
    Parties.find()
        .then((parties) => {
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json(parties);
        }, (err) => next(err))
        .catch((err) => next(err));
})
.post((req, res, next) => {
    Parties.create(req.body)
        .then((party) => {
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json(party);
        }, (err) => next(err))
        .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("Update operation not supported for /parties.");
})
.delete((req, res, next) => {
    Parties.remove()
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
});

//========================================Router for /parties/partyId===================================================
partyRouter.route('/:partyId')
.get((req, res, next) => {
    Parties.findById(req.params.partyId)
        .then((party) => {
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json(party);
        }, (err) => next(err))
        .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported for /parties/'+ req.params.partyId +'.')
})
.put((req, res, next) => {
    Parties.findByIdAndUpdate(req.params.partyId, {
        $set: req.body
    }, {
        new: true
    })
        .then((party) => {
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json(party);
        }, (err) => next(err))
        .catch((err) => next(err));
})
.delete((req, res, next) => {
    Parties.findByIdAndRemove(req.params.partyId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
});

module.exports = partyRouter;