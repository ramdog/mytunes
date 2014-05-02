// CurrentSongView.js

var CurrentSongView = Backbone.View.extend({

  tagName: 'div',

  template: _.template('<h2 id="current-song"><%= artist %> - <%= title %></h2>'),

  // initialize: function() {
  //   this.model.on('change:currentSong', function(model){
  //     this.playerView.setSong(model.get('currentSong'));
  //   }, this);
  // },

  render: function(song){
    this.model = song;
    return this.$el.html(this.template(this.model ? this.model.attributes : ''));
  }

});
