const { MedicalTestNames }          = require('../models');
const authService       = require('../services/auth.service');
const { to, ReE, ReS }  = require('../services/util.service');
const { getPartnersTests }  = require('../services/tests.service');


const get = async function(req, res){
    let tests, err;
    user = req.user;
    user.dataValues.id
    tests = await getPartnersTests(user.dataValues.id);
    return ReS(res, {'tests':tests});
}
module.exports.get = get;   

const remove = async function(req, res){
    let patient, err;
    patient = req.patient;
    [err, patient] = await to(patient.destroy());
    if(err) return ReE(res, 'error occured trying to delete user');

    return ReS(res, {message:'Deleted User'}, 204);
}
module.exports.remove = remove;
