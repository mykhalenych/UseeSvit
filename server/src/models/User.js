import {DataTypes} from 'sequelize';

import {sequelize} from '../utils/db.js';

export const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    activationToken: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    resetToken: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    language: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    theme: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});
