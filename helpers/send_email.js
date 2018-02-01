'use strict'
const api_key     = 'key-25fc0a73025b3329627740cc582f9021';
const domain      = 'sandboxb33efd7116d9434ab04cbd7bc49c1833.mailgun.org';
const mailgun     = require('mailgun-js')({apiKey: api_key, domain: domain});
const emailJoin       = require('./email-join');
const emailFull       = require('./email-full-booked');

function sendEmailToUser(person,agenda) {
  var data = {
    from: 'Sports Hub Fuadhi <postmaster@sandboxb33efd7116d9434ab04cbd7bc49c1833.mailgun.org>',
    to: person.email,
    subject: 'Hello From Sports Hub!!',
    html: emailFull(person,agenda)
  };
  mailgun.messages().send(data, function (error, body) {
    console.log('body ..',body);
    console.log('error ..',error);
  });
}

function sendEmailToHost(person,agenda) {
  var data = {
    from: 'Sports Hub Fuadhi <postmaster@sandboxb33efd7116d9434ab04cbd7bc49c1833.mailgun.org>',
    to: person.email,
    subject: 'Hello From Sports Hub!!',
    text: `Congrats! Your Hosted Event ${agenda.name} is fully booked`
  };
  mailgun.messages().send(data, function (error, body) {
    console.log('body ..',body);
    console.log('error ..',error);
  });
}

function sendEmailWhenJoin(person,agenda) {
  var data = {
    from: 'Sports Hub Fuadhi <postmaster@sandboxb33efd7116d9434ab04cbd7bc49c1833.mailgun.org>',
    to: person.email,
    subject: 'Hello From Sports Hub!!',
    html: emailJoin(person, agenda)
  };
  mailgun.messages().send(data, function (error, body) {
    console.log('body ..',body);
    console.log('error ..',error);
  });
}

module.exports = {sendEmailToUser: sendEmailToUser, sendEmailToHost: sendEmailToHost, sendEmailWhenJoin: sendEmailWhenJoin};
