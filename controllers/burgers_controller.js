var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();


// Get Route
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });
});

// Post Route
router.post("/api/burgers", function(req, res) {
    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function(result) {
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("Condition", condition);
    burger.updateOne({ devoured: req.body.devoured }, condition, function(result){
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("Condition", condition);
    burger.deleteOne(condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;