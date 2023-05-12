import userService from '../services/userService.js';
import {getToken} from '../utils/getToken.js';

const getAll = async (req, res) => {
    const users = await userService.getAllActive();
    const normalizedUsers = users.map(userService.normalize);

    res.status(200).send(normalizedUsers);
};

const getMe = async (req, res) => {
    const refreshToken = getToken(req);

    const user = await userService.checkIfExist(refreshToken);

    res.status(200).send(userService.normalize(user));
};

export default {getAll, getMe};
