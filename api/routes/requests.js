import express from 'express';
import { createRequest, updateRequest, getRequests, getRequest, deleteRequest } from '../controllers/request.js';

const router = express.Router();

router.post('/', createRequest);
router.put('/:id', updateRequest);
router.get('/', getRequests);
router.get('/:id', getRequest);
router.delete('/:id', deleteRequest);

export default router;
