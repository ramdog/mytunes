// model of the collection songqueue
var PlaylistModel = Backbone.Model.extend({
  // collection: Songs
  initialize: function () { // name is the users text input for playlist name
    this.set('songList', new SongQueue());
    // set current playlist to be this playlist if it is the only playlist
  },

  default: {
    name: name
  }
});
