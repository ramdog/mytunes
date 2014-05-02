// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.currentSongView = new CurrentSongView({model: this.model.get('currentSong')});
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.playlistsView = new PlaylistsView({collection: this.model.get('playlists')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
      this.currentSongView.render(model.get('currentSong'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.currentSongView.$el,
      this.playerView.$el,
      this.playlistsView.$el,
      this.songQueueView.$el,
      this.libraryView.$el,
    ]);
  }

});
