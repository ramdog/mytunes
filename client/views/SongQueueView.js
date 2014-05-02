// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();

    // listener to update queue when the songqueue collection changes
    this.model.get('songList').on('add remove change:playsCount', function(song) {
      this.render();
    }, this);

  },

  setPlaylist: function(playlist) {
    this.model = playlist;
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Current Playlist: ' + this.model.get('name') + '</th>').append(
      this.model.get('songList').map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
