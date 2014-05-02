var PlaylistsView = Backbone.View.extend({

  tagName: 'div',

  // include text field + button to new playlist name
  // dropdown list of playlists with selector
  //  map through list of playlists and add name to dropdown

  // events:
  //  form submission --> create to playlist
  //  dropdown selection --> change current playlist

  initialize: function() {
    this.render();
    this.collection.on('add', function(){
      console.log('a new playlist was added!');
    });
  },

  events: {
    'submit': function(e) {
      e.preventDefault();
      var playlistName = this.$('input[name=playlist]').val();
      this.collection.createPlaylist(playlistName);
    }
  },

  render: function() {
    // this.$el.children().detach();

    var test = [1, 2, 3, 4];

    this.$el.html(
      '<form id="new-playlist">\
        <input type="text" name="playlist" placeholder="Create new playlist">\
        <input type="submit" value="Submit">\
      </form>\
      <select id="playlist-select"></select>');

    this.$el.find('#playlist-select').append(
      _.map(test, function(item) {
        return '<option value="' + item + '">Hip Hop</option>';
      })
    );
  }

});
