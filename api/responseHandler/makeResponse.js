module.exports = {
    'getSimpleResponse': (callback) => {
        var response = {
            messages: [
                {
                    "type": 0,
                    "platform": "facebook",
                    "speech": "This is the simple response." 
                }
            ]
        }
        callback(null, response);
    },
    getQuickReplyResponse: (callback) => {
        var response = {
            "data": {
                "facebook": {
                    "text": "Here are your quick replies",
                    "quick_replies": [
                        {
                        "content_type": "text",
                        "title": "QR1",
                        "payload": "QR1"
                        },
                        {
                        "content_type": "text",
                        "title": "QR2",
                        "payload": "QR2"
                        }
                    ]
                }
            }
        }
        callback(null, response);
    },
    getCorousalResponse: (callback) => {
        var response = {
            //     messages: [
            //         {
            //             "type": 0,
            //             "platform": "facebook",
            //             speech: "We recieved your location details and now we are checking the internet connection in your area."
            //         },/*,
            //         {
            //         "type": 0,
            //         speech: "We registered your issue and your ticket number is " + ticket + ". Thank you for connecting with us."
            //     }*/
                        "type": 4,
                        "platform": "facebook",
                        "attachment": {
                            "type":"template",
                            "payload": {
                                "template_type": "generic",
                                "title":"Welcome to ISP solutions.",
                                "image_url": "",
                                "subtitle": "",
                                "buttons": [
                                    {
                                        "type": "payload",
                                        "title": "Register issue",
                                        "payload": "register issue"
                                    },
                                    {
                                        "type": "web_url",
                                        "title": "watch video in youtube"
                                    },
                                    {
                                        "type": "postback",
                                        "title": "contact us",
                                        "payload": "contact_us"
                                    }
                                ]
                            }
                        }
                    // }
                // ]
            // // res.json({
            // //     speech: req.body.result.resolvedQuery
            // // });
                }
        callback(null, response);
    }
}