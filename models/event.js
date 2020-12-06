const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    organizers: {
        type: String,
    },

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        enum: ['sel','reg','none'],
        default: 'sel'
    },
    thumbnailUrl: {
        type: String
    },

    venue: {
        type: String,
    //    required: true
    },
    venueUrl: {
        type: String,
    },
    date: {
        type: String,
    //    required: true
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    teamSize: {
        type: String,
        default: 1
    },
    eventType: {
        type: String,
        enum: ['event','gl','workshop','hackathon'],
        default: 'event'
    },

    rulebookUrl: {
        type: String
    },
    registrationUrl: {
        type: String
    },
    charge: {
        type: String,
        default: 0
    },

    postLinks: {
        type: String
    },
}, {
    timestamps: true
});


const Event = mongoose.model("event", eventSchema);
module.exports = Event;