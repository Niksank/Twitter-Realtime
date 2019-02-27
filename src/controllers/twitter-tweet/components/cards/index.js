// Dependencies
var template = require('ak-template');
var Backbone = require('Backbone');
var $ = require('jQuery');

var twitterCardTpl = require('./index.tpl');

module.exports = Backbone.View.extend({
  'el': '.container',
  'template': template(twitterCardTpl),
  'initialize': function initialize () {
  },
  'render': function render () {
    this.$el.html(this.template(this.collection.toJSON()));
    $(document).ready(function animate () {
      $('.test:first').addClass('transition');
    });
    //return this;
  }
});
