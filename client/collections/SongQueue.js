// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);

    // params.library.on('dequeue', function (song) {

    // }

  }

});
