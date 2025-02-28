const { exec } = require('child_process');

function checkPageSpeed(url, callback) {
    exec(`java -jar PageSpeedAnalyser.jar ${url}`, (err, stdout, stderr) => {
        if (err) {
            callback(stderr || err.message);
        } else {
            callback(null, stdout.trim());
        }
    });
}

module.exports = { checkPageSpeed }; 