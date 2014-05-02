// Playlists.js - Defines a backbone collection class for playlists.
var Playlists = Backbone.Collection.extend({

  model: PlaylistModel,

  createPlaylist: function(playlistName) {
    this.add({
      name: playlistName,
    });
  }


});
