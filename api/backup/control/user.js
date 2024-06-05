import User from '../mod/User.js';
import bcrypt from 'bcryptjs';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { createError } from '../../utils/error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const updateProfileImage = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const imgPath = req.file.path.replace(/\\/g, "/");

        if (!userId) {
            return next(createError(400, "User ID is required"));
        }

        const user = await User.findById(userId);
        if (!user) {
            return next(createError(404, "User not found"));
        }

        if (user.img) {
            const oldImage = path.join(__dirname, '../', user.img);
            if (fs.existsSync(oldImage)) {
                try {
                    fs.unlinkSync(oldImage);
                } catch {
                    return next(createError(500, "이미지 삭제 오류"));
                }
            }
        }

        user.img = `/uploads/${req.file.filename}`;
        await user.save();
        res.status(200).json({ message: "Profile image updated", user: { img: `uploads/${req.file.filename}` } });
    } catch (e) {
        next(e);
    }
};

export const registerUser = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            ...req.body,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        next(err);
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: { ...req.body, avatar: req.file ? req.file.filename : undefined } },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
    } catch (err) {
        next(err);
    }
};

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};
