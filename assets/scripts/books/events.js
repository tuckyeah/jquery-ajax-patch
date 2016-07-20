'use strict';

const libraryApi = require('../library-api');
const ui = require('./ui');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetBooks = function (event) {
  event.preventDefault();
  console.log("Event target in get books is " + event.target.toString());
  let bookId = $(event.target).find('[name="book[id]"]').val();

  if (bookId.length === 0) {
    libraryApi.index()
      .done(ui.onSuccess)
      .fail(ui.onError);
  } else {
    libraryApi.show(event.target)
      .done(ui.onSuccess)
      .fail(ui.onError);
  }
};

const onCreateBook = function (event) {
  event.preventDefault();
  libraryApi.create(event.target)
    .done(ui.onSuccess)
    .fail(ui.onError);
};

const onDeleteBook = function (event) {
  event.preventDefault();
  libraryApi.destroy(event.target)
    .done(ui.onDelete)
    .fail(ui.onError);
};

const onUpdateBook = function(event){
  event.preventDefault();
  libraryApi.update(event.target)
    .done(ui.onUpdate)
    .fail(ui.onError);
};


module.exports = {
  onGetBooks,
  onCreateBook,
  onDeleteBook,
  onUpdateBook
};
