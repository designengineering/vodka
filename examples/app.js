
/**
 * Module dependencies.
 */

var express = require( 'express' )
var routes  = require( './routes' );
var app     = express.createServer();

// Configuration
app.configure( function (){
  app.set( 'views', __dirname + '/views' );
  app.set( 'view engine', 'jade' );
  app.use( express.logger());
  app.use( express.bodyParser());
  app.use( express.methodOverride());
  app.use( app.router );
  app.use( express.static( __dirname + '/public' ));
});

app.configure( 'development', function (){
  app.use( express.errorHandler({
    dumpExceptions : true,
    showStack      : true
  }));
});

app.configure( 'production', function (){
  app.use( express.errorHandler());
});

// Routes
app.get( '/tests/get', routes.get );
app.post( '/tests/post', routes.post );
app.put( '/tests/put', routes.put );
app.delete( '/tests/delete', routes.destroy );

app.listen( 3000, function (){
  console.log( "Express server listening on port %d in %s mode", app.address().port, app.settings.env );
});

module.exports = app;