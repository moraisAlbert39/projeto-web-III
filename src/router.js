const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/rota1', (req, res) => res.render('rota1'));
router.get('/rota2', (req, res) => res.render('rota2'));
router.get('/rota3', (req, res) => res.render('rota3'));

module.exports = router;