const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  tutorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor',
    required: true,
  },
}, {
  timestamps: true,
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;
