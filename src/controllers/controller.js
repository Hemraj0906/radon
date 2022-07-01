const collegeModel = require("../models/collegeModel")
 const internModel = require("../models/internModel")
// const mongoose = require("mongoose");


let isValidData = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
}

let isValidRequestBodyData = function (data) {
    return Object.keys(data).length > 0;

}
let createCollege = async function (req, res) {

    try {
        let data = req.body;

        
        // empty data from req body
        if (!isValidRequestBodyData(data)) {
            return res.status(400).send({ status: false, message: `Invalid request parameter. Please provide college details` });
            // return;
        }

        // Extract in object destructuring
        let { name, fullName, logoLink } = data;

        if (!isValidData(name)) {
            res.status(400).send({ status: false, message: "Name is required." });
            return;

        }
        if (!isValidData(fullName)) {
            res.status(400).send({ status: false, message: "Fullname is required." });
            return;
        }
        if (!isValidData(logoLink)) {
            res.status(400).send({ status: false, message: "Logo link is required." });
            return;
        }

        //name

        const name1 = data.name.toLowerCase().split(" ").join(""); //manipulating college's name to correct format
        let checkCollegeName = await collegeModel.findOne({ name: name1 });
        if (checkCollegeName)
            return res.status(400).send({ status: false, msg: `College name is already used! ${name1}Try another name` });
        //fullNameCollege
        let checkCollegefullName = await collegeModel.findOne({ fullName });
        if (checkCollegefullName) {
            return res.status(400).send({ status: false, message: `Try another name bcoz this name ${fullName} is already used.` });

        };
        //logoLink validation follow pattern like this
        if (!/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(data.logoLink))
            return res.status(400).send({ status: false, message: "Please provide valid link" })

        // Allready link is store
        let validLogoLink = await collegeModel.findOne({ logoLink });
        if (validLogoLink) {
            return res.status(400).send({ status: false, message: "Please provide valid URL" })

        }
        // creating college
        let createdCollege =  await collegeModel.create(data);
        //response
        return res.status(201).send({ status: true, msg: "College created successfully", data: createdCollege, });
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
}
//================================================================================================================
//create Intern
module.exports.createCollege = createCollege 