// Dependencies
var Backbone = require('backbone');
var io = require('socket.io-client');
var socket = io('http://localhost:80');

// Models
var Mention = require('../models/mention.js');

// Collection
var Mentions = Backbone.Collection.extend({
  'model': Mention,
  /**
    * addTask
    * @param {object} mention - Get object.
    * @return mention
  */
  'addMention': function addTask (mention) {
    this.unshift({
      'created_at': mention.created_at,
      'id': mention.id_str,
      'text': mention.text,
      'user': {
        'name': mention.user.name,
        'profile_image_url': mention.user.profile_image_url
      },
      'reply_count': mention.reply_count,
      'retweet_count': mention.retweet_count,
      'favorite_count': mention.favorite_count,
      'coordonates': mention.coordonates
    });
  },
  'initialize': function initialize () {
    socket.on('tweet', function getTweet (data) {
      this.addMention(data);
    }.bind(this));
  }
});

module.exports = Mentions;
