const fs = require('fs');

const readAllInPath = (path, fn) => {
    const isDirectory = fs.lstatSync(path).isDirectory();
    if (!isDirectory) return fn(path);
    const allInPath = fs.readdirSync(path);
    return allInPath.forEach((dirOrFile) => fn(dirOrFile));
};

const normalize = (string) => {
    string = string.replace(/ /g, '-');
    string = string.replace(/,/g, '-');
    string = string.replace(/\./g, '-');
    string = string.replace(/'/g, '');
    string = string.replace(/\(/g, '');
    string = string.replace(/\)/g, '');
    string = string.replace(/--/g, '-');
    string = string.toLowerCase();
    return string;
};

const renameFilesInFolders = (path) => {
    readAllInPath(path, (dir) => {
        const isFile = fs.lstatSync(`${path}/${dir}`).isFile();
        if (isFile) return;
        readAllInPath(`${path}/${dir}`, (file) => {
            const replaceFile = `${path}/${dir}/${file}`;
            const replacementFile = `${path}/${normalize(dir)}.svg`;
            console.info(
                `Renaming: ${replaceFile}` + '\n' + `With: ${replacementFile}`
            );
            fs.renameSync(replaceFile, replacementFile);
        });
    });
};

const firstCliArg = process.argv[2];

renameFilesInFolders(firstCliArg);
