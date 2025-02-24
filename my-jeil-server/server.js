const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const multer = require('multer');
const port = 30001;



const { Pool } = require('pg');

const pool = new Pool({
    user: 'jeilapp',
    host: 'eilapgsql.in.psu.ac.th',
    database: 'jeilapp',
    password: '5C}S8%5yiJR',
    port: 5432
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'FileUpload/'); // กำหนดโฟลเดอร์สำหรับเก็บไฟล์
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });



pool.connect((err) => {
    if (err) {
        console.error('error connecting to postgresql:', err);
        return;
    }
    console.log('connected to postgresql');
});

// app.use(cors());

app.use(cors({ origin: 'http://localhost:3000' })); // ใช้งาน CORS และอนุญาตให้เชื่อมต่อจาก

//ทำให้ express สามารถอ่านข้อมูลตัวแปรที่ป้อนผ่าน form ใน web application
app.use(bodyParser.urlencoded({ extended: true }));

// ทำให้ express สามารถอ่านข้อมูลในรูปแบบ JSON ที่ได้รับจาก request ของ web application
app.use(bodyParser.json());

app.use('/FileUpload', express.static(path.join(__dirname, 'FileUpload'))); // ทำให้โฟลเดอร์ 'uploads' สามารถเข้าถึงได้

app.get('/', (req, res) => {
    res.send('Hellow World by ME!!!');
});



app.put('/api/update-articles/:id', upload.single('file'), async (req, res) => {
    const id = req.params.id;
    const { status_id } = req.body;
    const file = req.file ? req.file.filename : null;
    try {
        await pool.query(`update articles set abstract_file = $1,fullpaper_file = $2, status_id = $3 where authors_id = $4`,
            [
                file, file, status_id, id
            ]);
        res.status(201).send('update successfull');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error update');
    }

});

app.get('/profile', (req, res) => {
    client.query('SELECT * FROM profile', (err, result) => {
        if (err) {
            console.error('error querying postgresql:', err);
            return;
        }
        console.log('connected to postgresql');

        res.json(result.rows); // แสดงผลข้อมูลที่ดึงมา
    });
});

// Get Data

// ประเภทของบทความ
app.get('/api/article-type', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM article_type');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving Article type');
    }
});
// ภาษาของบทความ
app.get('/api/language', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM language');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving lenguage');
    }
});

// ประเภทผู้เขียน
app.get('/api/section', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM section');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving section');
    }
});

app.get('/api/articles', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM articles');
        res.json(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send('Error :', error);

    }
});


app.get('/api/status', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM status');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving status');
    }
});

app.get('/api/status/main-status-A', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM status where main_status_id = 'A'`);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving status');
    }
});
app.get('/api/status/main-status-A-B', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM status where main_status_id in ('A','B')`);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving status');
    }
});
app.get('/api/status/main-status-B', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM status where main_status_id = 'B'`);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving status');
    }
});
app.get('/api/status/main-status-C', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM status where main_status_id = 'C'`);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving status');
    }
});
app.get('/api/status/main-status-D', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM status where main_status_id = 'D'`);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving status');
    }
});
app.get('/api/status/main-status-E', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM status where main_status_id = 'E'`);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving status');
    }
});
app.get('/api/status/main-status-F', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM status where main_status_id = 'F'`);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving status');
    }
});


app.get('/api/status_peer_review', async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM status_peer_review`);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving status_peer_review');
    }
});

app.get('/api/authorsArticle/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await pool.query(`SELECT firstname_th, lastname_th, firstname_en, lastname_en, affiliation, email, phone FROM authors 
            inner join authors_role on  authors_role.authors_id = authors.authors_id 
            inner join articles on articles.articles_id = authors_role.articles_id
            where articles.articles_id = $1` , [id]
        );
        res.json(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).send('Error :', error);

    }

});

app.get('/api/author/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await pool.query('SELECT * FROM Authors WHERE Authors_id = $1', [id]);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching author:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Post Data

app.post('/api/add_articles', async (req, res) => {
    // const input = req.body;
    const articles_id = req.body.articles_id;
    const title_th = req.body.title_th;
    const title_en = req.body.title_en;
    const article_type_id = req.body.article_type_id;
    const language_id = req.body.language_id;
    const section_id = req.body.section_id;
    const subdate = req.body.subdate;

    try {
        // const articleResult = 
        await pool.query(`insert into articles (articles_id,title_th,title_en,article_type_id,language_id,section_id,subdate,status_id) VALUES ($1,$2,$3,$4,$5,$6,$7,'1') returning articles_id`,
            [
                articles_id,
                title_th,
                title_en,
                article_type_id,
                language_id,
                section_id,
                subdate

            ]);
        res.status(201).json({ message: 'Add successfull', articlesid: articles_id });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding Article');
    }
});



app.post('/api/add_authors', async (req, res) => {
    // const input = req.body;

    const { firstname_th,
        lastname_th,
        firstname_en,
        lastname_en,
        affiliation,
        email,
        phone,
        articles_id,
        corresponding,
        order_role } = req.body;


    try {
        const authorsResult = await pool.query(`insert into authors (firstname_th, lastname_th, firstname_en, lastname_en, affiliation, email, phone) VALUES ($1,$2,$3,$4,$5,$6,$7) returning authors_id`,
            [
                firstname_th, lastname_th, firstname_en, lastname_en, affiliation, email, phone
            ]);
        res.status(201).send('Add successfull');
        const authorsId = authorsResult.authors_id;
        await pool.query(`insert into authors_role (articles_id,authors_id,order_role,corresponding) VALUES ($1,$2,$3,$4)`,
            [
                articles_id, authorsId, order_role, corresponding
            ]);
        res.status(201).json({ message: 'Author created successfully', authorId });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding authors');
    }
});




app.put('/api/update-status', async (req, res) => {

});





app.put('/api/update-authors/:id', async (req, res) => {
    const id = req.params.id;
    const { firstname_th,
        lastname_th,
        firstname_en,
        lastname_en,
        affiliation,
        email,
        phone,
        authors_id,
        articles_id,
        corresponding,
        order_role } = req.body;

    try {
        await pool.query(`update authors set firstname_th = $1, lastname_th = $2, firstname_en = $3, lastname_en = $4, affiliation = $5, email = $6, phone = $7 where authors_id = $8`,
            [
                firstname_th, lastname_th, firstname_en, lastname_en, affiliation, email, phone, id
            ]);
        res.status(201).send('update successfull');
        // const authorsId = authorsResult.row[0].authors_id;
        // await pool.query('insert into authors_role (articles_id,authors_id,order_role,corresponding) VALUES ($1,$2,$3,$4)',
        //     [
        //         articles_id, authorsId, order_role, corresponding
        //     ]);
        // res.status(201).json({ message: 'Author created successfully', authorId });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding authors');
    }

});

app.delete('/api/delete-articles-by-id/:id', async (req, res) => {

});


app.post('/api/delete-articles-all', async (req, res) => {

});


app.delete('/api/delete-athors-by-id/:id', async (req, res) => {
    const id = req.params.id;
    // const {  } = req.body;

    try {
        await pool.query(`delete from authors where authors_id = $1`,
            [
                id
            ]);
        res.status(201).send('Delete successfull');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding authors');
    }
});


app.post('/api/delete-authors-all', async (req, res) => {

});


// app.post('/add-Articles', (req, res) => {

// });


app.get('/test', (req, res) => {
    client.query('SELECT * FROM articles', (err, result) => {
        if (err) {
            console.error('error querying postgresql:', err);
            return;
        }
        console.log('connected to postgresql');
        // console.log(result.rows);
        res.json(result.rows); // แสดงผลข้อมูลที่ดึงมา
        // res.send(result.rows); // แสดงผลข้อมูลที่ดึงมา
    });
});


app.listen(3001, () =>
    console.log(`Example app Listening on port ${port}`)
);