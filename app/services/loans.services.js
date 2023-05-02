const Utils = require('../utils/index.js');

class LoansServices {

    async getLoanOptions(param) {
      const banksList = JSON.parse(Utils.getResourceData('banks'));

      //Get random banks for response;
      const shuffledBankOptions = Utils.shuffleArray(banksList);
      const randomNumber = Math.floor(Math.random() * 5) + 1;
      const selectedBankOptions = shuffledBankOptions.slice(0, randomNumber);

      let returnList = [];

      //Calculate loan options
      const loanOptions = selectedBankOptions.map(bankOption => {

        const reqTasso = param.fisso ? (bankOption.tasso / 100) / 12 : ((bankOption.tasso + 1) / 100) / 12;
        const reqDurata = param.durata * 12;
        const calcRata = (param.importo * reqTasso) / (1 - Math.pow(1 + reqTasso, -reqDurata));

        var finalObj = {
          "rata": calcRata.toFixed(2),
          "bank": bankOption,
        }
        
        returnList.push(finalObj);
      });

      return returnList;
    }
}
  
module.exports = LoansServices;