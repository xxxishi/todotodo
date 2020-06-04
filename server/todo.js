
const events = require("./events.json");

module.exports = (app) => {
    app.get('/events/list', (req, res) => {
        return res.json({
            code: 0,
            lists: events.events_lists
        })
    })
};