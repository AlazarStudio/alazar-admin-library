import checkVersion from "./functions/checkVersion.js";
import getCurrentVersion from "./functions/getCurrentVersion.js";
import getAllFilesFromRepo from "./functions/getAllFilesFromRepo.js";

let library = {
    checkVersion,
    getCurrentVersion,
    getAllFilesFromRepo
};

export default library;