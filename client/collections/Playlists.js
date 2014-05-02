// Playlists.js - Defines a backbone collection class for playlists.
var Playlists = Backbone.Collection.extend({

  model: PlaylistModel,
  // url: './data/playlists.js',

  // broadcasts event
  // playlistAdded: function(){
  //   this.trigger('playlistAdded', this);
  // },

  createPlaylist: function(playlistName) {
    this.add({
      name: playlistName,
    });
  }


});
