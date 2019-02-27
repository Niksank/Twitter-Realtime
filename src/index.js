// Dependencies
var Backbone = require('backbone');

// Collections
var Mentions = require('./collections/mention.js');

require('./styles.css');

// Controllers
var TwitterMention = require('./controllers/twitter-tweet/index.js');

// Router
var Router = Backbone.Router.extend({
  'routes': {
    '*actions': 'tasksList'
  }
});

var router = new Router();

router.on('route:tasksList', function defautRoute () {
  var mentions = new Mentions();

  var twitterMention = new TwitterMention({
    'collection': mentions
  });

  twitterMention.render();
});
var io = require('socket.io-client');
var socket = io('http://localhost:80');

socket.on('tweet', function getTweet (data) {
  console.log(data);
});

Backbone.history.start({
  'pushState': true
});
