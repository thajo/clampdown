/**
 * Created by thajo on 26/05/15.
 * Use this file for populate the db
 */
"use strict";

exports.seed = function(callback) {
    var Student = require("../api/student/student.schema.js").Student;
    Student.remove({}, function(err) {
        if (err) {
            console.log(err);
            return callback(err);
        }
        else {
            Student.create(
                {
                    username: "thajostudent",
                    firstname: "John",
                    lastname: "Häggerud",
                    studentType: "campus",
                    services: {
                        github: "thajostudent"
                    }
                },
                {
                    username: "tstjo",
                    firstname: "Johan",
                    lastname: "Leitet",
                    studentType: "distance",
                    services: {
                        github: "leitet",
                        linkedin: "leitet"
                    }
                },
                function(err) {
                    if (err) {
                        console.log(err);
                        return callback(err);
                    }

                    callback();
                });
        }
    });

};