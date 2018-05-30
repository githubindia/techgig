 const handler = require('../responseHandler/handler')

module.exports = (req, res) => {
    // console.log(JSON.stringify(req.body.result.fulfillment.messages[0]));
    if(req.body.originalRequest.source == 'facebook') {
        handler.fbHandler(req.body, (err, response) => {
            // console.log(response.payload.facebook);
            res.json(response);
        })
    } else if (req.body.originalRequest.source == '') {

    }
    // res.send("hello");
}