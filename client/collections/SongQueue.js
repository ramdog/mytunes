// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  playFirst: function() {
    if (this.first()) {
      this.first().play();
    }
  },

  playNext: function(song) {
    var nextIndex = this.indexOf(song) + 1;
    if (this.at(nextIndex)) {
      this.at(nextIndex).play();
    }
  },

  enqueue: function(song) {
    var lenBefore = this.length;
    this.add(song);
    // if this is first song in the queue, play it immediately
    if (lenBefore === 0) {
      this.playFirst();
    }
  },

  dequeue: function(song) {
    var first = this.first();
    this.remove(song);
    // if the top song was removed (from track ending or
    // manually removing), play the new first song
    if (song === first) {
      this.playFirst();
    }
  },

  initialize: function(){
    this.on('dequeue', function (song) {
      this.dequeue(song);
    });

    this.on('ended', function (song) {
      this.playNext(song);
    });
  }

});
