const { Patient }          = require('../models');
const authService       = require('../services/auth.service');
const { to, ReE, ReS }  = require('../services/util.service');


const get = async function(req, res){
    let patient, err;
    [err, patient] = await to(Patient.findAll({
      limit: 3
    }));
    console.log("CC=======>",patient)
    return ReS(res, {'patient':patient});
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
