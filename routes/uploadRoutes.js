import express from "express";
import * as uploadController from '../controllers/uploadController.js';

export const router = express.Router();

router.post('/files', uploadController.files);

export default router;