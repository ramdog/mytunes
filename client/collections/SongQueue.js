// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  enqueue: function(song) {
    this.push(song);
  },

  initialize: function(){

  }

});
