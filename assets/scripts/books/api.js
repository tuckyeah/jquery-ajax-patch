'use strict';

const app = require('../app.js');

const index = function () {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET',
  });
};

const show = function (id) {
  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'GET',
  });
};

const create = function (form) {
  return $.ajax({
    url: app.host + '/books/',
    method: 'POST',
    data: getFormFields(form),
  });
};

const destroy = function (form) {
  let data = getFormFields(form);
  let id = data.book.id;

  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'DELETE',
  });
};

module.exports = {
  index,
  show,
  create,
  destroy,
};
