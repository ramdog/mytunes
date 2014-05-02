// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('playlists', new Playlists());
    // add an empty default playlist to playlists
    // set that default to currentPlaylist (songQueue)
    // --or-- currentPlaylist (songQueue) starts empty
    this.set('currentPlaylist', new PlaylistModel());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      this.set('currentSong', song);
      // increment the play count
      song.set('playsCount', song.get('playsCount') + 1);
    }, this);

    params.library.on('enqueue', function(song){
      this.get('currentPlaylist').get('songList').enqueue(song);
    }, this);

    this.get('playlists').on('add', function(playlist) {
      if (this.get('playlists').length === 1) {
        this.set('currentPlaylist', playlist);
      }
    }, this);
  }

});
