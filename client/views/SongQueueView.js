// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  // will create new SongQueueEntryView when queue event is broadcasted
  queue: function(song) {
    this.$el.append(new SongQueueEntryView({model: song}).render());
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Queue</th>');
  }

});
