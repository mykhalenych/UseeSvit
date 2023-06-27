import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';

import {User} from '../models/User.js';
import {ApiError} from '../exceptions/ApiError.js';
import emailService from './emailService.js';
import jwtService from './jwtService.js';

const getAllActive = () => {
    return User.findAll({
        where: {
            activationToken: null,
        },
        order: ['id'],
    });
};

const getByEmail = (email) => {
    return User.findOne({
        where: {
            email,
        },
    });
};

const register = async (name, email, password) => {
    const existingError = await getByEmail(email);

    if (existingError) {
        throw ApiError.BadRequest('Email is already taken');
    }

    const activationToken = uuidv4();

    const hash = await bcrypt.hash(password, 10);

    await createUser({
        name,
        email,
        password: hash,
        activationToken,
    });

    await emailService.sendActivalionLink(email, activationToken);
};

const reset = async (email) => {
    const user = await getByEmail(email);

    if (!user) {
        throw ApiError.NotFound('User with this email does not exist');
    }

    const resetToken = uuidv4();

    user.resetToken = resetToken;

    await user.save();

    await emailService.sendPasswordResetLink(email, resetToken);
};

const checkIfExist = async (token) => {
    const userData = jwtService.validateRefreshToken(token);

    if (!userData) {
        throw ApiError.Unauthorized();
    }

    return userData;
};

const createUser = ({name, email, password = null, activationToken = null}) => {
    return User.create({
        name,
        email,
        password,
        activationToken,
        language: 'en',
        theme: 'light',
    });
};

const normalize = ({id, name, email, language, theme}) => {
    return {
        id,
        name,
        email,
        language,
        theme,
    };
};

export default {
    getAllActive,
    getByEmail,
    register,
    normalize,
    checkIfExist,
    createUser,
    reset,
};
