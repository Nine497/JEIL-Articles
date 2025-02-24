// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// // const app = express();
// // const port = 3001;

const { Pool } = require('pg');

const pool = new Pool({
    user: 'jeilapp',
    host: 'eilapgsql.in.psu.ac.th',
    database: 'jeilapp',
    password: '5C}S8%5yiJR',
    port: 5432
});

pool.connect((err) => {
    if (err) {
        console.error('error connecting to postgresql:', err);
        return;
    }
    console.log('connected to postgresql');
});