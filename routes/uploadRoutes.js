import express from "express";
import * as uploadController from '../controllers/uploadController.js';

export const router = express.Router();

router.post('/files', uploadController.files);
router.post('/files2', uploadController.files2);
router.post('/filesMulti', uploadController.filesMulti);

export default router;