import express from 'express';
import 'express-async-errors';

import * as createNewUrlController from '../controller/CreateNewUrl.js';

const router = express.Router();

// 목표 get
router.get('/', createNewUrlController.getUrl);

export default router;
