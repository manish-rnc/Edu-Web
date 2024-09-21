import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  }, 
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor',
    required: true,
  },
  dateAdded: {
    type: Date, 
    default: Date.now,
  } 
});

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;
