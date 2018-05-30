const makeResponse = require('./makeResponse');

module.exports = {
    'fbHandler': (body, callback) => {
        if(body.result.metadata.intentName == 'simple-text') {
            makeResponse.getSimpleResponse((err, res) => {
                callback(null, res)
            })
        } else if(body.result.metadata.intentName == 'quick-replies') {
            makeResponse.getQuickReplyResponse((err, res) => {
                callback(null, res);
            })
        } else if(body.result.metadata.intentName == 'corousel-set') {
            makeResponse.getCorousalResponse((err, res) => {
                // console.log(JSON.stringify(res));
                callback(null, res);
            })
        } else {
            console.log('no intent');
        }
    }
}