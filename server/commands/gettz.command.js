<<<<<<< HEAD
<<<<<<< HEAD
const UserModel = require('./../models/user.model');
const config = require('../../config.json');
const { findMember } = require('./find');
const { executeFunction, minToTZ, bold } = require('./utility');

module.exports = {
  processGetTZ: function (command, message, args, dry = false) {
=======
const { URL } = require('url');
const _ = require('lodash');
=======
>>>>>>> 43be71f (Clean up code, add error handling)
const UserModel = require('./../models/user.model');
const config = require('../../config.json');
const { findMember } = require('./find');
const { executeFunction, minToTZ, bold } = require('./utility');

module.exports = {
<<<<<<< HEAD
  processGet: function (command, message, args, dry = false) {
>>>>>>> 0860310 (Add new commands: SETTZ, GETTZ, STATUS)
=======
  processGetTZ: function (command, message, args, dry = false) {
>>>>>>> 43be71f (Clean up code, add error handling)
    if (command === 'gettz') {
      console.log('GETTZ', args);
      executeFunction(get, message, args, dry);
      return true;
    }
    return false;
  },
};

<<<<<<< HEAD
<<<<<<< HEAD
async function get(message, args, dry) {
  const memberIdentifier = message.content
    .slice(config.prefix.length + 'gettz'.length , message.content.length)
=======
function pad(number) {
  if (number<=99) { number = ("0"+number).slice(-2); }
  return number;
}
async function get(message, args, dry) {
  const memberIdentifier = message.content
    .slice(config.prefix.length + 5, message.content.length)
>>>>>>> 0860310 (Add new commands: SETTZ, GETTZ, STATUS)
=======
async function get(message, args, dry) {
  const memberIdentifier = message.content
    .slice(config.prefix.length + 'gettz'.length , message.content.length)
>>>>>>> 43be71f (Clean up code, add error handling)
    .trim();
  console.log('INFO:  memberIdentifier: ', memberIdentifier);
  let member;
  if (memberIdentifier === '') {
    member = { value: message.member, found: true };
    console.log(
      `INFO:  user is the author message ${member.value.user.tag} -> ${member.value.id}`
    );
  } else {
    member = findMember(
      memberIdentifier,
      message.guild,
      message.mentions.users
    );
    if (!member.found) {
      console.log(member.msg);
      if (!dry) {
        await message.channel.send(member.msg);
      }
<<<<<<< HEAD
<<<<<<< HEAD
      return;
=======
>>>>>>> 0860310 (Add new commands: SETTZ, GETTZ, STATUS)
=======
      return;
>>>>>>> 43be71f (Clean up code, add error handling)
    } else {
      console.log(
        `INFO:  user found ${member.value.user.tag} -> ${member.value.id}`
      );
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
  const userDB = await UserModel.findOne({ id: member.value.user.id });
  if(userDB && userDB.timezone != null){
  let tzmin = userDB.timezone;
    message.channel.send("Timezone for " +
      bold(member.value.displayName) + " is `"
      + minToTZ(tzmin) + "`");
  }
  else{
    message.channel.send("Error: User " + bold(member.value.displayName) + " has not set a timezone.")
=======
  if (member.found) {
    const userDB = await UserModel.findOne({ id: member.value.user.id });
    tzmin = userDB.timezone;
    sign = Math.sign(tzmin);
    if (sign<0){
      sign = "-";
    }
    else{
      sign = "+";
    }
    tzmin = Math.abs(tzmin);
    hours = Math.floor(tzmin/60);
    minutes = tzmin - hours*60;
    message.channel.send("Timezone for " +
      member.value.displayName + " is `"
      + "UTC" + sign + pad(hours) + ":" + pad(minutes) + "`");
>>>>>>> 0860310 (Add new commands: SETTZ, GETTZ, STATUS)
=======
  const userDB = await UserModel.findOne({ id: member.value.user.id });
  if(userDB && userDB.timezone){
  let tzmin = userDB.timezone;
    message.channel.send("Timezone for " +
      bold(member.value.displayName) + " is `"
      + minToTZ(tzmin) + "`");
  }
  else{
    message.channel.send("Error: User " + bold(member.value.displayName) + " has not set a timezone.")
>>>>>>> 43be71f (Clean up code, add error handling)
  }
}
