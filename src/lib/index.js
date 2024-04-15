const { readdirSync, statSync } = require("fs");
const path = require("path");

/**
 * @param { string } readPath The full path to the directory
 * @param { string[] } files An optional list of already read files with full paths
 * @description Reads a directory's content recursively
 */

const readSync = (readPath, files = []) => {
    // Read the files from readPath

    const readFiles = readdirSync(readPath);

    // Create an array of directories which will contain all found subdirectories
    const dirs = [];

    // Check if each read file is a directory

    readFiles.forEach((file) => {
        if (statSync(path.join(readPath, file)).isDirectory()) {
            // Add the directory to the dirs array

            return dirs.push(file);
        }

        // The analyzed path points to a file so add it to the array of all the read files

        files.push(path.join(readPath, file));
    });

    // Check if the process has found directories

    if (dirs.length > 0) {
        // Recursively read every found directory
        
        dirs.forEach((dir) => {
            // Reading a directory will add all its files to the files array which will be passed to the next iterations
            readSync(path.join(readPath, dir), files);
        })
    }

    // Return the read operations' result

    return files;
}

module.exports = readSync;