var fs = require('file-system');
var copydir = require('copy-dir');
const chalk = require('chalk');
const log = console.log;
var isError = false;

function copyFolder(folders, basePath, version, dev) {
    if (folders !== undefined && folders.length > 0) {
        folders.forEach(elm => {
            var filePath = basePath + "/" + elm;
            var copyPath = basePath + "/" + version + "/" + elm;
            copydir(filePath, copyPath, function (err) {
                if (err) {
                    log(chalk.red(err));
                    isError = true;
                } else {
                    if (dev === true)
                        log(chalk.green('Copy Folder : ' + copyPath));
                }
            });
        });

    } else {
        console.error("Error: Please Set Extension Folders.");
    }
}

exports.init = function (c) {

    console.log('\r\n');
    if (c !== undefined) {

        if (c.dev === undefined) {
            c["dev"] = false;
        }

        if (c.version === undefined || c.version.trim() === "") {
            console.error("Error: Please Set Version.");
        } else if (c.files === undefined || c.files.length <= 0) {
            console.error("Error: Please Set Extension Main Files.");
        } else {

            // Create Version Folder
            fs.mkdir(c.basePath + "/" + c.version);
            // Extension Files Copy
            c.files.forEach(elm => {
                var filePath = c.basePath + "/" + elm;
                var copyPath = c.basePath + "/" + c.version + "/" + elm;
                fs.copyFile(filePath, copyPath, {
                    done: function (err) {
                        if (err === null) {
                            if (c.dev === true)
                                log(chalk.green('Copy File : ' + copyPath));
                        } else {
                            isError = true;
                            log(chalk.red(err));
                            // console.error(err);
                        }                        
                    }
                });
            });

            // Copy Folders
            copyFolder(c.folders, c.basePath, c.version, c.dev);

            // if (isError === false) {
            //     console.log("Your Extension Successfully Build.");
            // } else {
            //     console.error("Error.");
            // }
        }
    }

}