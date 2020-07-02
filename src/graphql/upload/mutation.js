const { createWriteStream , unlink } = require("fs");
const mkdirp = require('mkdirp');
const upload_dir = '../../../documents';
const path = require("path");

mkdirp.sync(upload_dir);

const storeUpload = async (file ) => { 
  const { createReadStream, filename, mimetype, encoding } = await file;
  const stream = createReadStream();

  await new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path.join(__dirname, `${upload_dir}`, filename)))
      .on("finish", () => resolve())
      .on("error", reject)
  );
  
  return args.file.then(file => {
    return file;
  });

};

module.exports = {
    storeUpload,
}