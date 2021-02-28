const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Area = require('../models/areas.js')
const Standing_Point = require('../models/standing_points.js')
const Stationary_Map = require('../models/stationary_maps.js')

const ObjectId = mongoose.Schema.Types.ObjectId

const project_schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    team: {
        type: ObjectId,
        required: true
    },
    area: {
        type: ObjectId,
        required: true,
        ref: 'Areas'
    },
    subareas: [{
        type: ObjectId,
        required: true,
        ref: 'Areas'
    }],
    standingPoints:[{
        type: ObjectId,
        required: true,
        ref: 'Standing_Points'
    }],
    stationaryCollections:[{
        type: ObjectId,
        ref: 'Stationary_Collections'
    }],

})

project_schema.plugin(uniqueValidator)

const Projects = mongoose.model('Projects', project_schema)

module.exports = Projects

module.exports.addProject = async function(newProject) {
    return (await newProject.save())
}

module.exports.updateProject = async function (projectId, newProject) {
    return await Projects.updateOne(
        { _id: projectId },
        { $set: {
            title: newProject.title,
            description: newProject.description,
            area: newProject.area,
        }}
    )
}

module.exports.deleteProject = async function(projectId) {

    project = await Projects.findById(projectId)

    await Stationary_Map.projectCleanup(project._id)

    for(var i = 0; i < project.subareas.length; i++)   
        await Area.findByIdAndDelete(project.subareas[i])
    
    for(var i = 0; i < project.standingPoints.length; i++)   
        await Standing_Point.findByIdAndDelete(project.standingPoints[i])

    for(var i = 0; i < project.stationaryCollections.length; i++)   
        await Stationary_collections.deleteCollection(project.stationaryCollections[i])

    return await Projects.findByIdAndDelete(projectId)
}

module.exports.teamCleanup = async function(teamId) {
    const doc =  await Projects.find({ team: teamId })

    for(var i = 0; i < doc.length; i++){
        await Projects.deleteProject(doc[i]._id)
    }
}

module.exports.addStationaryCollection = async function (projectId, collectionId) {
     return await Projects.updateOne(
        { _id: projectId },
        { $push: { stationaryCollections:  collectionId}}
    )
}


module.exports.deleteStationaryCollection = async function(projectId, collectionId) {
    await Stationary_collections.findByIdAndDelete(collectionId)
    return await Projects.updateOne(
        { _id: projectId },
        { $pull: { stationaryCollections: collectionId}}
    )
}

module.exports.addArea = async function(projectId, areaId) {
    return await Projects.updateOne(
        { _id: projectId },
        { $push: { subareas:  areaId}}
    )
}

module.exports.deleteArea = async function(projectId, areaId) {
    await Area.findByIdAndDelete(areaId)
    return await Projects.updateOne(
      { _id: projectId },
      { $pull: { subareas: areaId}}
  )
}

module.exports.addPoint = async function(projectId, pointId) {
    return await Projects.updateOne(
        { _id: projectId },
        { $push: { standingPoints:  pointId}}
    )
}

module.exports.deletePoint = async function(projectId, pointId) {
    await Standing_Point.findByIdAndDelete(pointId)
    return await Projects.updateOne(
      { _id: projectId },
      { $pull: { standingPoints: pointId}}
  )
}