// Request 모델을 불러옴
import Request from '../models/Request.js';
// 오류 생성 유틸리티를 불러옴
import { createError } from '../utils/error.js';

// 새로운 요청을 생성하는 함수
export const createRequest = async (req, res, next) => {
    try {
        // 요청 본문(req.body)에서 새로운 Request 인스턴스를 생성
        const newRequest = new Request(req.body);
        // 새로운 Request를 데이터베이스에 저장
        await newRequest.save();
        // 저장된 Request를 JSON 형태로 반환, 상태 코드는 201 (Created)
        res.status(201).json(newRequest);
    } catch (err) {
        // 오류가 발생하면 다음 미들웨어로 오류를 전달
        next(err);
    }
};

// 요청을 업데이트하는 함수
export const updateRequest = async (req, res, next) => {
    try {
        // 요청 경로에서 ID를 추출
        const { id } = req.params;
        // 요청 본문에서 패스워드를 제외한 나머지 업데이트 데이터를 추출
        const { password, ...updates } = req.body;

        // 해당 ID로 Request를 데이터베이스에서 찾음
        const request = await Request.findById(id);
        // 요청이 존재하지 않으면 404 오류 생성
        if (!request) return next(createError(404, 'Request not found'));

        // 입력한 패스워드가 저장된 패스워드와 일치하지 않으면 403 오류 생성
        if (request.password !== password) return next(createError(403, 'Invalid password'));

        // 업데이트 데이터를 기존 요청에 병합
        Object.assign(request, updates);
        // 업데이트된 요청을 데이터베이스에 저장
        await request.save();

        // 업데이트된 요청을 JSON 형태로 반환, 상태 코드는 200 (OK)
        res.status(200).json(request);
    } catch (err) {
        // 오류가 발생하면 다음 미들웨어로 오류를 전달
        next(err);
    }
};

// 모든 요청을 가져오는 함수
export const getRequests = async (req, res, next) => {
    try {
        // 모든 Request를 데이터베이스에서 찾음
        const requests = await Request.find();
        // 찾은 모든 Request를 JSON 형태로 반환, 상태 코드는 200 (OK)
        res.status(200).json(requests);
    } catch (err) {
        // 오류가 발생하면 다음 미들웨어로 오류를 전달
        next(err);
    }
};

// 특정 요청을 가져오는 함수
export const getRequest = async (req, res, next) => {
    try {
        // 요청 경로에서 ID를 추출
        const { id } = req.params;
        // 해당 ID로 Request를 데이터베이스에서 찾음
        const request = await Request.findById(id);
        // 요청이 존재하지 않으면 404 오류 생성
        if (!request) return next(createError(404, 'Request not found'));
        // 찾은 Request를 JSON 형태로 반환, 상태 코드는 200 (OK)
        res.status(200).json(request);
    } catch (err) {
        // 오류가 발생하면 다음 미들웨어로 오류를 전달
        next(err);
    }
};

// 요청을 삭제하는 함수
export const deleteRequest = async (req, res, next) => {
    try {
        // 요청 경로에서 ID를 추출
        const { id } = req.params;
        // 요청 본문에서 패스워드를 추출
        const { password } = req.body;

        // 해당 ID로 Request를 데이터베이스에서 찾음
        const request = await Request.findById(id);
        // 요청이 존재하지 않으면 404 오류 생성
        if (!request) return next(createError(404, 'Request not found'));

        // 입력한 패스워드가 저장된 패스워드와 일치하지 않으면 403 오류 생성
        if (request.password !== password) return next(createError(403, 'Invalid password'));

        // 요청을 데이터베이스에서 삭제
        await request.delete();
        // 삭제 완료 메시지를 JSON 형태로 반환, 상태 코드는 200 (OK)
        res.status(200).json({ message: 'Request deleted' });
    } catch (err) {
        // 오류가 발생하면 다음 미들웨어로 오류를 전달
        next(err);
    }
};
