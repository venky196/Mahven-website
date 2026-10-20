const fs = require("node:fs");
const path = require("node:path");

const packageDirectory = path.join(__dirname, "..", "node_modules", "@fontsource", "space-grotesk");
const outputDirectory = path.join(__dirname, "..", "assets", "fonts");

fs.mkdirSync(outputDirectory, { recursive: true });
fs.copyFileSync(
    path.join(packageDirectory, "files", "space-grotesk-latin-600-normal.woff2"),
    path.join(outputDirectory, "space-grotesk-latin-600-normal.woff2")
);
fs.copyFileSync(path.join(packageDirectory, "LICENSE"), path.join(outputDirectory, "LICENSE"));
