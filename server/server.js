var loopback = require('loopback');
var loopbackConsole = require('loopback-console');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;
  if (loopbackConsole.activated()) {
    loopbackConsole.start(app,
                          // loopback-console config
                          {
                            prompt: "auth # ",
                            // ...
                          });
  } else if (require.main === module) {
    app.start();
  }

});
