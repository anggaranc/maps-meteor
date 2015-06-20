Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('home', {
    path: '/',
  });
});

Router.onBeforeAction(function() {
  GoogleMaps.load();
  this.next();
}, { only: ['home'] });
