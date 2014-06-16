export default Ember.ObjectProxy.extend({
  typeForRoot: function(root) {
    var camelized = Ember.String.camelize(root);
    return Ember.String.singularize(camelized);
  }
});

/*
export default Ember.ObjectProxy.extend({
  typeForRoot: function(root) {
    var camelized = Ember.String.camelize(root);
    return Ember.String.singularize(camelized);
  }
});
*/
 
export default {
  name: 'store',
  initialize: function(container, app) {
    app.inject('route', 'store', 'service:store');
    app.inject('controller', 'store', 'service:store');
  }
};
