module.exports = app => {
    var router = require("express").Router();

    const agentController = require('../controllers/agents.controller.js');
    const loansController = require('../controllers/loans.controller.js')

    // Log received calls
    app.use((req, res, next) => {
        const start = Date.now();
        res.on("finish", () => {
          const elapsed = Date.now() - start;
          console.log(`${req.method} ${req.url} ${res.statusCode} ${elapsed}ms`);
        });
      
        next();
      });

    /* 
     *   @route /agents
     */
        router.get('/agents', agentController.getAllAgents);
        router.get('/agents/random', agentController.getRandomAgent);
    
    /* 
     *   @route /loans
     */
        router.post('/loans', loansController.calculateLoan);

    app.use('/api', router);
  };