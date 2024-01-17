import multer from 'multer';

const _formdataParam = "files";
const _limitBytes = 3_000_000; // 3MB
const _maxFiles = 3;

// --------- Multer (simple) -----------------------------

const uploadSingle = multer({ dest: 'uploads/' }).single(_formdataParam);

// FILES :
export const files = async (req, res) => {
    uploadSingle(req, res, (err) => {
        if (err)
            return res.status(400).send('Bad request.');

        res.send(req.file);

        // res.send(req.file); ==> Send a File-Metadata:
        // {
        //     "fieldname": "demo_image",
        //     "originalname": "Bla-bla-bla.png",
        //     "encoding": "7bit",
        //     "mimetype": "image/png",
        //     "destination": "uploads/",
        //     "filename": "606a35b560fc125207313e71c5f794e2",
        //     "path": "uploads\\606a35b560fc125207313e71c5f794e2",
        //     "size": 641909
        // }
    });
}

// --------- Multer (disk Storage) -----------------------------

const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, './uploads'); },
    filename: (req, file, cb) => { cb(null, file.originalname); }
});

const uploadDisc = multer({ storage, limits: { fileSize: _limitBytes } }).single(_formdataParam);

// FILES 2 :
export const files2 = async (req, res) => {
    uploadDisc(req, res, (err) => {
        if (err) {
            console.log(err);
            return res.status(400).send('Bad request.');
        }
        // res.send(req.file);
        res.redirect(302, '/uploads/' + req.file.filename);
    });
};

// --------- Multer DiskStorage (Multi-files) : -----------------------------

const uploadDiscMulti =
    multer({ storage, limits: { fileSize: _limitBytes } }).array(_formdataParam, _maxFiles);

// app.post('/filesMulti', 
export const filesMulti = async (req, res) => {
    try {
        uploadDiscMulti(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                console.log('Multer Error: ', err);
                return res.status(400).send('Bad request.');
            } else if (err) {
                console.log('Unknown Error: ', err);
                return res.status(400).send('Bad request.');
            }
            return res.send(req.files);
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send('Bad request.');
    }
};