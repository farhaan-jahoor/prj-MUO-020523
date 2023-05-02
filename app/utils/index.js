const fs = require('fs');
const path = require('path');

function getResourceData(resourceType) {
    const BaseResPath = 'app/resources/'
    const filePath = path.join(BaseResPath, `${resourceType}.json`);

    try {
        const data = fs.readFileSync(filePath);
        return data;
    } catch (err) {
        console.error('#IN: _utils/index_ | #MESSAGE: ', err.message);
        return null;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

module.exports = {
    getResourceData,
    shuffleArray
};