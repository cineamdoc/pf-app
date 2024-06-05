import express from 'express';
import { updateUser, deleteUser, getUser, getUsers, updateProfileImage } from '../control/user.js';
import { verifyUser, verifyAdmin } from '../../utils/verifyToken.js';
import upload from '../../utils/upload.js';
const router = express.Router();

// 업데이트
router.put('/:id', verifyUser, updateUser);
router.put('/:id/avatar', verifyUser, upload.single('avatar'), updateProfileImage);
// 삭제
router.delete('/:id', verifyUser, deleteUser);
// 조회
router.get('/:id', verifyUser, getUser);
// 전체 조회
router.get('/', verifyAdmin, getUsers);

export default router;
