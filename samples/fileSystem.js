//const http = require('http');
//const fs = require('fs');
import { createServer } from 'http';
import { open, write, close, readFile as _readFile } from 'fs';

import { readFile, appendFile, writeFile, rename, unlink } from 'fs/promises';
// writeFile - can creates a file if not exists.

async function appendFileAsync(filePath, writeData) {
    try {
        await appendFile(filePath, writeData, { flag: 'a' }); // 'w'
        console.log('Appended successfully.');
    } catch (error) {
        console.error('File appending error: ', error);
    }
}

async function readFileAsync(filePath) {
    try {
        const fileData = await readFile(filePath);
        console.log(fileData.toString());
    } catch (error) {
        console.error('File reading error: ', error);
    }
}

async function renameFileAsync(filePath, destin) {
    try {
        await rename(filePath, destin);
        console.log('Renamed successfully.');
    } catch (error) {
        console.error('File renaming error: ', error);
    }
}

// DELETE file:
async function unlinkFileAsync(filePath) {
    try {
        await unlink(filePath);
        console.log('Removed successfully.');
    } catch (error) {
        console.error('File removing error: ', error);
    }
}

const testFile = 'fileSystem.txt';
const testText = 'FS.OPEN new file and append new text...';

// FS.OPEN with WRITE and CLOSE chain:
// --------------------------------------------------
open(testFile, 'a', (err, file) => {

    // ---- Callback function After Open:
    if (err) throw err;
    write(file, testText, (err) => {

        // ---- Callback function After Write:
        if (err) throw err;
        console.log('Text successfully added.');
        close(file, (err) => {

            // ---- Callback function After Close:
            if (err) throw err;
            console.log('Successfully finished.');
        });
    });
});

createServer(function (req, res) {

    // fs.readFileSync - Not Recommended for Express!!!

    _readFile(testFile, (err, fileData) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(fileData);
        return res.end();
    })
}).listen(3000);

console.log('\r\nServer is listening on http://localhost:3000');
