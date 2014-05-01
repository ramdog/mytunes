// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  playFirst: function() {
    if (this.first()) {
      this.first().play();
    }
  },

  enqueue: function(song) {
    this.add(song);
    // if only song, also this.model.play()
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(song) {
    var first = this.first();
    this.remove(song);
    // end the current song so that if there are no songs left, nothing is playing
    // if this is the current song, play the new first song
    if (song === first) {
      this.playFirst();
    }
  },

  initialize: function(){
    this.on('dequeue', function (song) {
      this.dequeue(song);
    });

    this.on('ended', function(song) {
      this.dequeue(song);
      this.playFirst();
    });
  }

});
