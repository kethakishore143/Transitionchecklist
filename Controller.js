const axios = require("axios");
const fs = require('fs');

const rules = require("./rules.json");

const API_URL = "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639";



const evaluateRules = (data, rules) => {
    return rules.map((rule) => {
        const isPassed = new Function("data", `return ${rule.condition}`)(data);
        return {
            id: rule.id,
            description: rule.description,
            status: isPassed ? "Passed" : "Failed",
        };
    });
};


exports.getChecklistResults = async (req, res) => {
    try {

        const { data } = await axios.get(API_URL);


        const results = evaluateRules(data, rules);


        res.render("checklist", { results });
    } catch (error) {
        res.status(500).send("Error fetching data or evaluating rules.");
    }
};
