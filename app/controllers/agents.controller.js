const AgentServices = require('../services/agents.services');
const agentServices = new AgentServices();

exports.getAllAgents = async (req, res) => {
    try {
        const items = await agentServices.getAll();
        res.json(items);
    } catch (err) {
        //console.error(err.message);
        res.status(500).send(err.message);
    }
};

exports.getRandomAgent = async (req, res) => {
    try {
        const items = await agentServices.getRandomAgent();
        res.json(items);
    } catch (err) {
        //console.error(err.message);
        res.status(500).send(err.message);
    }
};