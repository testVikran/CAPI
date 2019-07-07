const {TE, to}   = require('./util.service');
const { MedicalTestNames } = require('../models');

module.exports.getPartnersTests = async (id) => {
    let err, tests;
    [err, tests] = await to(MedicalTestNames.findAll());
    if(err) return [pe(err)];

    return tests;
};


