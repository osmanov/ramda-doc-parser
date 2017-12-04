const osmosis = require('osmosis');
const fs = require('fs');
let savedData = [];

osmosis
    .get('http://ramdajs.com/docs')
    .find('.card')
    .set({
        'name': 'h2>a',
        'description': '.description>p',
        "args": [
            ".params>.details>.list-group>.list-group-item>.name",
        ],
        "returns": ".params>.details>.panel-body>.type",
    })
    .data(result => {
        savedData.push(result);
    }).done(() => {
    fs.writeFileSync('./ramda.json', JSON.stringify(savedData, null, '  ') , 'utf-8');
});