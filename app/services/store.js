
// Configure Hyperagent to prefix every URL with the unicorn proxy.
Hyperagent.configure('ajax', function ajax(options) {
  options.url = 'https://unicorn-cors-proxy.herokuapp.com/' + options.url;
  return Ember.$.ajax(options);
});

Hyperagent.configure('defer', Ember.RSVP.defer);

var HALTalkResource = new Hyperagent.Resource({
  url: 'http://haltalk.herokuapp.com/',
  headers: {
    'X-Requested-With': 'Hyperagent'
  }
});

export default Ember.Object.extend({
  find: function(){

    var result = Ember.ArrayProxy.create({
      objectAtContent: function(idx) {
        return this.get('content').objectAt(idx).props;
      }
    });

    result.set('thing', 'bla');

    HALTalkResource.fetch().then(function () {
      console.log(HALTalkResource.links);
      return HALTalkResource.links['ht:users'].fetch();
    }).then(function (users) {
      result.set('content', users.links['ht:user']);
    });

    return result;

  }
});
