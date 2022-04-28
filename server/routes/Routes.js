const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller');

/**
 * App Routes 
*/
router.get('/', Controller.homepage);

router.get('/submit-Thoughts', Controller.submitThoughts);
router.post('/submit-Thoughts', Controller.submitThoughtsOnPost);
router.get('/faqs', Controller.faqs);
router.get('/coaches', Controller.coaches);
router.get('/star', Controller.star);
router.get('/high', Controller.high);

module.exports = router;
