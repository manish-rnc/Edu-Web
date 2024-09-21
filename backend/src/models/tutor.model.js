import mongoose from "mongoose";

const tutorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String
    },
    qualification: {
        type: String,
        required: true
    },
    subjects: [{
        type: String,
    }],
    bio: {
        type: String
    },
    reviews: [
        {
            learnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Learner' },
            rating: { type: Number, min: 1, max: 5 },
            comment: { type: String },
            createdAt: { type: Date, default: Date.now },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Tutor = mongoose.model('Tutor', tutorSchema);
export default Tutor;
