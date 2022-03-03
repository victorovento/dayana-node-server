const {
    response
} = require("express");

const sqlite = require('sqlite');

const getTemperatures = (req, res = response) => {

    const query = req.query;
    res.status(501).json({
        msg: "GET Endpoint",
        query
    });
};

const postTemperatures = (req, res = response) => {
    const {
        timestamp,
        value
    } = req.body;

    let db = new sqlite.Database('../db/database.sqlite');
    db.run(`INSERT INTO temperature VALUES (${timestamp},${value})`);
    db.close();

    res.status(200).json({
        msg: "GUARDADO",
        timestamp,
        value,
    });
};

const patchTemperatures = (req, res = response) => {
    res.status(501).json({
        msg: "PATCH Endpoint",
    });
};

const putTemperatures = (req, res = response) => {
    const {
        id
    } = req.params;
    res.status(501).json({
        msg: "PUT Endpoint",
        id
    });
};

const deleteTemperatures = (req, res = response) => {
    res.status(501).json({
        msg: "DELETE Endpoint",
    });
};

module.exports = {
    getTemperatures,
    patchTemperatures,
    putTemperatures,
    deleteTemperatures,
    postTemperatures,
};