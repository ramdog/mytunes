// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();

    // listener to update queue when the songqueue collection changes
    this.collection.on('add remove change:playsCount', function(song) {
      this.render();
    }, this);

  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
