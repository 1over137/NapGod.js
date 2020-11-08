const UserModel = require("./../models/user.model");
<<<<<<< HEAD
const { minToTZ, bold, parseTZstr } = require('./utility');

module.exports = {
  processSetTZ: (function(command, message, args, dry=false) {
=======
const { minToTZ } = require('./utility');

module.exports = {
  processSetTZ: (async function(command, message, args, dry=false) {
>>>>>>> 43be71f (Clean up code, add error handling)
    if (command === "settz") {
      if (args.length == 1) {
	        author = message.author;
	        member = message.member;
          if (author === null || member === null) {
	           console.log("WARN>>: ", "Member or author no longer exists");
	           return false;
	        }
<<<<<<< HEAD
	        settz(args, message, dry, author, member, false);
        }
        else {
	        msg = "Bad input format. Use `+settz [UTC+/-XX]`\n\
Example: `+settz UTC+1` or `+settz UTC+5:30` or `+settz UTC-4`";
=======
	        await settz(args, message, dry, author, member, false);
        }
        else {
	        msg = "Bad input format. Use `+settz [offset from UTC in minutes]`\n\
Example: `+settz 60` for `UTC+01:00`. Use negative numbers for the Western Hemisphere.";;
>>>>>>> 43be71f (Clean up code, add error handling)
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
=======
function pad(number) {
  return ("0" + number).slice(-2);
}

function bold(s){
  return "**" + s + "**";
}
>>>>>>> 43be71f (Clean up code, add error handling)

function buildUserInstance(args, author) {
  let userUpdate = {
    tag: author.tag,
    userName: author.username,
<<<<<<< HEAD
    timezone: parseTZstr(args[0])
=======
    timezone: args[0]
>>>>>>> 43be71f (Clean up code, add error handling)
  };
  return userUpdate;
}

<<<<<<< HEAD
=======
//Returns true if both schedule and napchart are set
//silent supresses dicord text output only, changes still take place
//(provided dry=false)
>>>>>>> 43be71f (Clean up code, add error handling)
async function settz(args, message, dry, author, member, silent) {
  complete = true;
  let msg = "";

  console.log("CMD   : SETTZ");
  console.log("ARGS  : ", args);
<<<<<<< HEAD
  if (!isValidTZ(parseTZstr(args[0]))) {
    message.channel.send("Error: Invalid timezone. Valid timezones are between `UTC-12:00` and `UTC+14:00`");
=======
  if (!isValidTZ(args[0])) {
    message.channel.send("Error: Invalid timezone. Valid timezones are between `-720` (UTC-12:00) and `840` (UTC+14:00)");
>>>>>>> 43be71f (Clean up code, add error handling)
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
    let tzmin = args[0];
>>>>>>> 43be71f (Clean up code, add error handling)
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
