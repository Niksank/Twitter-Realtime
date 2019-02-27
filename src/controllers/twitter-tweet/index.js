var template = require('ak-template');
var Backbone = require('Backbone');

var twitterRealTimeTpl = require('./index.tpl');
var CardsController = require('./components/cards');

module.exports = Backbone.View.extend({
  'el': '#app',
  'template': template(twitterRealTimeTpl),
  'render': function render () {
    this.$el.html(this.template());

    var cards = new CardsController({
      'collection': this.collection
    });

    cards.render();
    return this;
  },
  'initialize': function init () {
    this.listenTo(this.collection, 'add', this.render);
    this.render();
  }
});
