const Utils = require('../utils/index.js');

class AgentsServices {

    async getAll() {
      const data = Utils.getResourceData('agents');
      if(data === null || data === undefined){ throw new Error("Could not get list of agents."); }
      return JSON.parse(data);
    }

    async getRandomAgent() {
      const data = JSON.parse(Utils.getResourceData('agents'));
      if(data === null || data === undefined){ throw new Error("Could not get list of agents.")};

      const randomIndex = Math.floor(Math.random() * data.length);
      return data[randomIndex];
    }
}
  
module.exports = AgentsServices;