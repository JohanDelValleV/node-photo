var NodeWebCam = require("node-webcam");

var opts = {
    width: 1280,
    height: 720,
    quality: 100,
    delay: 0,
    saveShots: true,
    output: "jpeg",
    device: false,
    // callbackReturn: "__dirname",
    verbose: false
};

var WebCam = NodeWebCam.create( opts );

WebCam.capture("test_picture", opts, function(err,data){

});
