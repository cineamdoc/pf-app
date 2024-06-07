import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import requestsRoute from './routes/requests.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// CORS 설정
app.use(cors({
    origin: [ 'http://13.125.225.203:3000',"http://cinemadoc.xyz","http://localhost:3000"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());

// MongoDB 연결
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log(err));

// __dirname 대체 코드
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'build')));

// API 라우트
app.use('/api/requests', requestsRoute);

// React 앱을 위한 모든 경로 처리
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
