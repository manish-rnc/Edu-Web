const Subject = require('../models/subject.model');
const User = require('../models/user.model');

exports.getAllSubjects = async (req, res) => {
    try {
        const userId = req.user;
        const subjects = await Subject.find({
            tutorId: userId,
        });

        // can add pagination later - limit, skip

        return res.status(200).send({
            code: 200,
            message: "Successful",
            data: subjects,
        });
    }
    catch (error) {
        return res.status(500).send({
            code: "500",
            message: "Internal Server Error",
            error: error,
        });
    }
};

exports.addSubject = async (req, res) => {
    try {
        const { subjectName, subjectDescription } = req.body;
        const userId = req.user;

        // client side data validation
        if (!subjectName) {
            return res.status(400).send({
                code: "400",
                message: "Incomplete Details",
            });
        }

        // only userType = 'tutor' can add subject - can be made as a middleware also in cases where only tutor is allowed to perform the operation
        const user = await User.findOne({
            _id: userId,
        });
        if (user.userType != 'tutor') {
            return res.status(400).send({
                code: 400,
                message: "Not authorized to add subject",
            });
        }

        // check if same subject exists for the same user
        const existingSubject = await Subject.findOne({
            name: subjectName,
            tutorId: userId,
        });
        if (existingSubject) {
            return res.status(400).send({
                code: "400",
                message: "Subject is already added",
            });
        }

        // create and add new subject
        const newSubject = await Subject.create({
            name: subjectName,
            description: subjectDescription,
            tutorId: userId,
        });
        newSubject.save();

        return res.status(201).send({
            code: "201",
            message: "Subject added successfully",
        });
    }
    catch (error) {
        return res.status(500).send({
            code: "500",
            message: "Internal Server Error",
            error: error,
        });
    }
};

exports.editSubject = async (req, res) => {

};

exports.deleteSubject = async (req, res) => {
    try {
        const userId = req.user;
        const { subjectId } = req.body;

        // check if subject id is provided
        if (!subjectId) {
            return res.status(400).send({
                code: '400',
                message: 'Unable to delete subject',
            })
        }

        // check if subject exists or not
        const subject = await Subject.findOne({
            tutorId: userId,
            _id: subjectId,
        });
        if (!subject) {
            return res.status(404).send({
                code: "400",
                message: "Subject not found",
            });
        }

        // delete the subject
        await Subject.deleteOne({
            tutorId: userId,
            _id: subjectId,
        });

        return res.status(200).send({
            code: "200",
            message: "Deleted Successfully",
        });
    }
    catch (error) {
        return res.status(500).send({
            code: "500",
            message: "Internal Server Error",
        })
    }
};