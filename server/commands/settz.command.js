const UserModel = require("./../models/user.model");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const { minToTZ, bold, parseTZstr } = require('./utility');

module.exports = {
  processSetTZ: (function(command, message, args, dry=false) {
=======
const { minToTZ } = require('./utility');
=======
const { minToTZ, bold } = require('./utility');
>>>>>>> 69034de (Add next sleep countdown in +status)
=======
const { minToTZ, bold, parseTZstr } = require('./utility');
>>>>>>> d1feadd (Change +settz input format to standard expression)

module.exports = {
<<<<<<< HEAD
  processSetTZ: (async function(command, message, args, dry=false) {
>>>>>>> 43be71f (Clean up code, add error handling)
=======
  processSetTZ: (function(command, message, args, dry=false) {
>>>>>>> 35a4d4d (Add sleep detection and wake countdown.)
    if (command === "settz") {
      if (args.length == 1) {
	        author = message.author;
	        member = message.member;
          if (author === null || member === null) {
	           console.log("WARN>>: ", "Member or author no longer exists");
	           return false;
	        }
<<<<<<< HEAD
<<<<<<< HEAD
	        settz(args, message, dry, author, member, false);
        }
        else {
	        msg = "Bad input format. Use `+settz [UTC+/-XX]`\n\
Example: `+settz UTC+1` or `+settz UTC+5:30` or `+settz UTC-4`";
<<<<<<< HEAD
=======
	        await settz(args, message, dry, author, member, false);
=======
	        settz(args, message, dry, author, member, false);
>>>>>>> 35a4d4d (Add sleep detection and wake countdown.)
        }
        else {
	        msg = "Bad input format. Use `+settz [offset from UTC in minutes]`\n\
Example: `+settz 60` for `UTC+01:00`. Use negative numbers for the Western Hemisphere.";;
>>>>>>> 43be71f (Clean up code, add error handling)
=======
>>>>>>> d1feadd (Change +settz input format to standard expression)
	        console.log("MSG   : ", msg);
	        if(!dry){message.channel.send(msg);}
          }
          return true;
          }
      else {
          return false;
          }
  })

};

<<<<<<< HEAD
<<<<<<< HEAD
=======
function pad(number) {
  return ("0" + number).slice(-2);
}

function bold(s){
  return "**" + s + "**";
}
>>>>>>> 43be71f (Clean up code, add error handling)
=======
>>>>>>> 69034de (Add next sleep countdown in +status)

function buildUserInstance(args, author) {
  let userUpdate = {
    tag: author.tag,
    userName: author.username,
<<<<<<< HEAD
<<<<<<< HEAD
    timezone: parseTZstr(args[0])
=======
    timezone: args[0]
>>>>>>> 43be71f (Clean up code, add error handling)
=======
    timezone: parseTZstr(args[0])
>>>>>>> d1feadd (Change +settz input format to standard expression)
  };
  return userUpdate;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
//Returns true if both schedule and napchart are set
//silent supresses dicord text output only, changes still take place
//(provided dry=false)
>>>>>>> 43be71f (Clean up code, add error handling)
=======
>>>>>>> 69034de (Add next sleep countdown in +status)
async function settz(args, message, dry, author, member, silent) {
  complete = true;
  let msg = "";

  console.log("CMD   : SETTZ");
  console.log("ARGS  : ", args);
<<<<<<< HEAD
<<<<<<< HEAD
  if (!isValidTZ(parseTZstr(args[0]))) {
    message.channel.send("Error: Invalid timezone. Valid timezones are between `UTC-12:00` and `UTC+14:00`");
=======
  if (!isValidTZ(args[0])) {
    message.channel.send("Error: Invalid timezone. Valid timezones are between `-720` (UTC-12:00) and `840` (UTC+14:00)");
>>>>>>> 43be71f (Clean up code, add error handling)
=======
  if (!isValidTZ(parseTZstr(args[0]))) {
    message.channel.send("Error: Invalid timezone. Valid timezones are between `UTC-12:00` and `UTC+14:00`");
>>>>>>> d1feadd (Change +settz input format to standard expression)
    return;
  }
  let userUpdate = buildUserInstance(args, author);

  let result = await saveUserTZ(message, userUpdate);

  async function saveUserTZ(message, userUpdate) {
    let query = { id: author.id };
    let options = { upsert: true, new: true, setDefaultsOnInsert: true };

    let result = null;
    try {
      result = await UserModel.findOneAndUpdate(query, userUpdate, options);
    } catch (error) {
      console.log("error searching for User: ", error);
<<<<<<< HEAD
      if (!dry&&!silent) {
        message.channel.send("Something broke.  Call the fire brigade");
      }
      return;
    }
    let tzmin = parseTZstr(args[0]);
=======
      if(!dry&&!silent){message.channel.send("Something broke.  Call the fire brigade");}
      return;
    }
<<<<<<< HEAD
    let tzmin = args[0];
>>>>>>> 43be71f (Clean up code, add error handling)
=======
    let tzmin = parseTZstr(args[0]);
>>>>>>> d1feadd (Change +settz input format to standard expression)
    message.channel.send("Timezone for " +
      bold(member.displayName) + " set to `" +
      minToTZ(tzmin) + "`");

    return result;

<<<<<<< HEAD
  }
}

function isValidTZ(tzmin) {
=======
    result.save();

  }
}

function isValidTZ(tzmin){
>>>>>>> 43be71f (Clean up code, add error handling)
  if (tzmin <= 840 && tzmin >= -720){
    return true;
  }
  else{
    return false;
  }
}
