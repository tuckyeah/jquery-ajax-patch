'use strict';

const api = require('./api');
const ui = require('./ui');

const getFormFields = require('../../../lib/get-form-fields');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetBooks = function (event) {
  event.preventDefault();
  let bookId = $(event.target).find('[name="book[id]"]').val();

  if (bookId.length === 0) {
    api.index()
      .done(ui.onSuccess)
      .fail(ui.onError);
  } else {
    api.show(event.target)
      .done(ui.onSuccess)
      .fail(ui.onError);
  }
};

const onCreateBook = function (event) {
  event.preventDefault();
  api.create(event.target)
    .done(ui.onSuccess)
    .fail(ui.onError);
};

const onDeleteBook = function (event) {
  event.preventDefault();

  // this passes the complete form DOM object
  // to the api.destroy, and converts it in the destroy method
  api.destroy(event.target)
    .done(ui.onDelete)
    .fail(ui.onError);
};

const onUpdateBook = function (event) {
  event.preventDefault();

  // this is converting the event DOM object
  // to a JS object using getFormFields
  let data = getFormFields(event.target);

  api.update(data)
    .done(ui.onSuccess)
    .fail(ui.onError);
};

module.exports = {
  onGetBooks,
  onCreateBook,
  onDeleteBook,
  onUpdateBook
};
