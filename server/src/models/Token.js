import {DataTypes} from 'sequelize';

import {User} from './User.js';
import {sequelize} from '../utils/db.js';

export const Token = sequelize.define('token', {
    refreshToken: {
        type: DataTypes.STRING(3000),
        allowNull: false,
    },
});

Token.belongsTo(User);
User.hasOne(Token);
