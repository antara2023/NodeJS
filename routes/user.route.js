import express from 'express';
import {getUserDetail, createtUserDetail, updateUserDetail, deleteUserDetail} from '../controller/user.controller.js';
import loggerMiddleware from '../middleware/logger.js';

const router = express.Router();

router.get('/:userId', getUserDetail)

router.post('/', createtUserDetail)

router.put('/:userId', updateUserDetail)

router.delete('/:userId', deleteUserDetail)

export default router 