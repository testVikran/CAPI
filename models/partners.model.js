'use strict';
const bcrypt      = require('bcrypt');
const bcrypt_p      = require('bcrypt-promise');
const jwt             = require('jsonwebtoken');
const {TE, to}          = require('../services/util.service');
const CONFIG            = require('../config/config');

module.exports = function(sequelize, DataTypes) {
  var Model =  sequelize.define('Partners', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'name'
    },
    secret: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'secret'
    }
  }, {
    tableName: 'partners',
    timestamps: false,
  });

    Model.beforeSave(async (partner, options) => {
        let err;
        if (partner.changed('secret')){
            let salt, hash
            [err, salt] = await to(bcrypt.genSalt(10));
            if(err) TE(err.message, true);

            [err, hash] = await to(bcrypt.hash(partner.secret, salt));
            if(err) TE(err.message, true);

            partner.secret = hash;
        }
    });

    Model.prototype.comparePassword = async function (pw) {
        let err, pass
        if(!this.secret) TE('secret not set');

        [err, pass] = await to(bcrypt_p.compare(pw, this.secret));
        if(err) TE(err);

        if(!pass) TE('invalid secret');

        return this;
    }

    Model.prototype.getJWT = function () {
        let expiration_time = parseInt(CONFIG.jwt_expiration);
        return "Bearer "+jwt.sign({partner_id:this.id}, CONFIG.jwt_encryption, {expiresIn: expiration_time});
    };

    Model.prototype.toWeb = function (pw) {
        let json = this.toJSON();
        return json;
    };

    return Model;
};
