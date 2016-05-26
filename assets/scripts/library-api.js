'use strict';

const app = require('./app');
const getFormFields = require('../../lib/get-form-fields');

const index = function () {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET',
  });
};

const show = function (form) {
  let data = getFormFields(form);
  let id = data.book.id;

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

const update = function(form){
  let data = getFormFields(form);
  let id = data.book.id;

  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'PATCH',
    data: data,
  });
};

module.exports = {
  index,
  show,
  create,
  destroy,
  update,
};
