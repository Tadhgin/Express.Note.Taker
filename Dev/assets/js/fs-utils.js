const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class dbReader {
    read() {
        return readFromFile('./db/db.json', "utf-8");
    }
    write(data) {
        return writeFile('./db/db.json', JSON.stringify(data));
    }

    getData() {
        return this.read().then((data) => {
            let parsedNotes = [].concat(JSON.parse(data));
            return parsedNotes;
        });
    }
    
    writeData(data) {
        return this.getData()
            .then((notes) => {
                console.log(notes);
                return [...notes, data]
            })
            .then((data) => {
                return this.write(data).then((data) => {
                    return data;
                });
            });
    }

}

/**
 *  
 *  @param {string} destination 
 *  @param {object} content 
 *  @returns {void} 
 */

const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );
/**
 * 
 *  @param {object} content 
 *  @param {string} file 
 *  @returns {void}
 */

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

module.exports = new dbReader();