const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    
    students: [
        {
            type: ObjectId,
            ref: 'Students',
            required: true
        }
    ],

    courses: [
        {
            type: ObjectId,
            ref: 'Courses',
            required: true
        }
    ]
})