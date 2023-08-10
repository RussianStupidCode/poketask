import * as fs from "fs";
import path from "path";

const dir = path.basename(path.dirname("./copy.js"));

const src = path.join(dir, "dist", "index.html");
const dst = path.join(dir, "dist", "404.html");

fs.copyFileSync(src, dst);
