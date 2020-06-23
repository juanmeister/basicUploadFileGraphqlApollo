const { createWriteStream } = require("fs");
const path = require("path");


const resolvers = {
    Query: {
      uploads: (parent, args) => {}
    },
    Mutation: {
      singleUpload: async (parent, { file }) => {
        const { stream, filename } = await file;
  
        await storeUpload({ stream, filename });
        return args.file.then(file => {
          return file;
        });
      }
    }
  };
  const storeUpload = ({ stream, filename }) => {
    new Promise((resolve, reject) =>
      stream
        .pipe(createWriteStream(path.join(__dirname, "../../documents/", filename)))
        .on("finish", () => resolve())
        .on("error", reject)
    );
  };

  module.exports = resolvers;