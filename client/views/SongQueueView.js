// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();

    // listener to update queue when the songqueue collection changes
    this.collection.on('add', function(song) {
      this.$el.append(new SongQueueEntryView({model: song}).render());
    }, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Queue</th>');
  }

});
