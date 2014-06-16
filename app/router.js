var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('nodes', {path: '/nodes'});
  this.resource('node', { path: '/node/:node_id' });
});

export default Router;
