/**
 * Created by admin on 4/26/2015.
 */
module.exports = {
  route: function (app, arr ) {
      arr.forEach(function (routePath) {
          app.use('/' + routePath  + '/', require('./router/' + routePath) );
      })
  }
};