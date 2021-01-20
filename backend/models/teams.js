const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const config = require('../utils/config.js')

const ObjectId = mongoose.Schema.Types.ObjectId

const team_schema = mongoose.Schema({

    title:{type: String},
    description:{type: String},
    public:{type: Boolean},
    projects:{type:[ObjectId]},
    users:{type:[{user: ObjectId,
                   role:{
                        type:String,
                        enum:['owner','admin','user']
                   }
                  }]
          }

})

const Teams = module.exports = mongoose.model('Teams', team_schema)

module.exports.addTeam = async function (newTeam){
  return await newTeam.save()
}

module.exports.updateTeam = async function (teamId, newTeam){
  return await Teams.updateOne(
    {_id:teamId},
    {$set: {title:newTeam.title,
            description:newTeam.description,
            public:newTeam.public
        }}
    )
}

module.exports.allTeamsShort = async function (count = 10, first = 0,userId = -1){
  if (userId != -1){
    return await Teams.find().skip(first).limit(count)
  }
  else{
    return await Teams.find({awards: {$elemMatch: {users:userId}}}).skip(first).limit(count)
  }
}

module.exports.addProject = async function(teamId, projectId){
  await Teams.updateOne({
    _id: teamId
  }, {
    $push:{
          projects: projectId
          }
      })
}


module.exports.promote = async function(teamId, userId){
    Teams.updateOne({
          _id: teamsId,
          users:{$elemMatch:{userId:uId,roll:'user'}}
    }, {
    $set:
       {
        "users.$.roll" : 'user'
       }
    })
}
module.exports.demote = async function(teamsId, uId){
    Teams.updateOne({
        _id: teamsId,
        users:{$elemMatch:{userId:uId,roll:'admin'}}
      }, {
        $set:
         {
          "users.$.roll" : 'user'
        }
      })
}

module.exports.isAdmin = async function(teamId, uID){
  doc = Teams.find({
    _id: teamId,
    users: {$elemMatch: {userId:uID, role:'admin'}}
  })

  if (doc.length === 0){
    return false
  }
  return true

}

module.exports.addUser = async function(teamsId, uID){
    Teams.updateOne({
        _id: teamsId
      }, {
        $addToSetid: {
          users: {userId:uID,roll:'user'}
        }
      })
}
module.exports.removeUser = async function(TeamsId, uID){
    Teams.updateOne({
        _id: TeamsId
      }, {
        $pull: {
          users:{userId:uId,roll:'user'}
        }
      })
}