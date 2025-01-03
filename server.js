const express = require('express');
const { signWithP12 } = require('@documenso/pdf-sign');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const app = express();

app.use(express.static('.'));

app.post('/sign', upload.fields([
    { name: 'pdf', maxCount: 1 },
    { name: 'p12', maxCount: 1 }
]), async (req, res) => {
    try {
        const signedPdf = await signWithP12({
            content: req.files.pdf[0].buffer,
            cert: req.files.p12[0].buffer,
            password: req.body.password
        });
        
        res.set('Content-Type', 'application/pdf');
        res.send(signedPdf);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
