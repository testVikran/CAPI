const { Partners }          = require('../models');
const authService       = require('../services/auth.service');
const { to, ReE, ReS }  = require('../services/util.service');

const create = async function(req, res){
    const body = req.body;

    if(!body.name && !body.secret){
        return ReE(res, 'Please enter an name to register.');
    } else if(!body.secret){
        return ReE(res, 'Please enter a secret to register.');
    }else{
        let err, parnter;

        [err, parnter] = await to(authService.createPartners(body));

        if(err) return ReE(res, err, 422);
        return ReS(res, {message:'Successfully created new parnter.', parnter:parnter.toWeb(), token:parnter.getJWT()}, 201);
    }
}
module.exports.create = create;

const get = async function(req, res){
    let parnter = req.parnter;

    return ReS(res, {parnter:parnter.toWeb()});
}
module.exports.get = get;

const update = async function(req, res){
    let err, parnter, data
    parnter = req.parnter;
    data = req.body;
    parnter.set(data);

    [err, parnter] = await to(parnter.save());
    if(err){
        if(err.message=='Validation error') err = 'The email address or phone number is already in use';
        return ReE(res, err);
    }
    return ReS(res, {message :'Updated Partners: '+parnter.email});
}
module.exports.update = update;

const remove = async function(req, res){
    let parnter, err;
    parnter = req.parnter;

    [err, parnter] = await to(parnter.destroy());
    if(err) return ReE(res, 'error occured trying to delete parnter');

    return ReS(res, {message:'Deleted Partners'}, 204);
}
module.exports.remove = remove;


const login = async function(req, res){
    const body = req.body;
    let err, partner;

    [err, partner] = await to(authService.authPartners(req.body));
    if(err) return ReE(res, err, 422);

    return ReS(res, {token:partner.getJWT(), partner:partner.toWeb()});
}
module.exports.login = login;