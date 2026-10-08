const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);

    for (const file of files) {
        fs.unlinkSync(path.join(logsDir, file));
        console.log(`Deleted ${file}`);
    }

    fs.rmdirSync(logsDir);
    console.log("Logs directory removed");
} else {
    console.log("Logs directory does not exist");
}
