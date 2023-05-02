const LoansServices = require('../services/loans.services');
const loansServices = new LoansServices();

exports.calculateLoan = async (req, res) => {
    try {
        const items = await loansServices.getLoanOptions(req.body);
        res.json(items);
    } catch (err) {
        //console.error(err.message);
        res.status(500).send(err.message);
    }
};
