const express = require('express');
const promotionRouter = express.Router();
const authenticate = require('../authenticate');

promotionRouter.route('/')
.get((req, res) => {
    res.end('Will send all the promotions to you');
})
.post(authenticate.verifyUser, (req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put(authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete(authenticate.verifyUser, (req, res) => {
    res.end('Deleting all promotions');
});

promotionRouter.route('/:promotionId')
.get((req, res) => {
    res.end(`Will send details of the capsite: ${req.params.promotionId}`)
})
.post(authenticate.verifyUser, (req, res) => {
    res.statudCode = 403;
    res.end('POST operation not supported')
})
.put(authenticate.verifyUser, (req, res) => {
    res.end(`Will update the promotion: ${req.body.name} with description: $ ${req.body.description}`)
})
.delete(authenticate.verifyUser, (req, res) => {
    res.end('Deleting promotion!');
})

module.exports = promotionRouter;
