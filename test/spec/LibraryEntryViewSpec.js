describe('LibraryEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    view = new LibraryEntryView({model: model});
    view.render();
  });

  // This spec passes already, but it's mutually exclusive with the one below.
  // Comment it out when implementing the song queue.
  it ('plays dblclicked songs', function(){
    sinon.spy(SongModel.prototype, 'play');

    view.$el.children().first().dblclick();
    expect(model.play).to.have.been.called;

    SongModel.prototype.play.restore();
  });

  it('queues clicked songs (on button click)', function(){
    sinon.spy(SongModel.prototype, 'enqueue');

    view.$('.enqueue').click();
    expect(model.enqueue).to.have.been.called;

    SongModel.prototype.enqueue.restore();
  });

});
