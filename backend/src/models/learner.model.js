import mongoose from "mongoose";

const learnerSchema = mongoose.Schema({
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
    bio: {
        type: String
    },
    reviews: [
        {
            tutorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' },
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

const Learner = mongoose.model('Learner', learnerSchema);
export default Learner;
