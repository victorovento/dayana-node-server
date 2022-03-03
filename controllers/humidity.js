const {
    response
} = require("express");

const sqlite3 = require('sqlite3').verbose();
const getHumidity = (req, res = response) => {

    const query = req.query;
    res.status(501).json({
        msg: "GET Endpoint",
        query
    });
};

const postHumidity = (req, res = response) => {
    const {
        timestamp,
        value
    } = req.body;

    let db = new sqlite3.Database('../db/database.sqlite');
    db.run(`INSERT INTO humidity VALUES (${timestamp},${value})`);
    db.close();

    res.status(200).json({
        msg: "GUARDADO",
        timestamp,
        value,
    });
};

const patchHumidity = (req, res = response) => {
    res.status(501).json({
        msg: "PATCH Endpoint",
    });
};

const putHumidity = (req, res = response) => {
    const {
        id
    } = req.params;
    res.status(501).json({
        msg: "PUT Endpoint",
        id
    });
};

const deleteHumidity = (req, res = response) => {
    res.status(501).json({
        msg: "DELETE Endpoint",
    });
};

module.exports = {
    getHumidity,
    patchHumidity,
    putHumidity,
    deleteHumidity,
    postHumidity,
};