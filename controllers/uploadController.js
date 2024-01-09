import multer from 'multer';

const formdataParam = "files";

const uploadSingle = multer({ dest: 'uploads/' }).single(formdataParam);

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
