const mutation = require('./mutation');
const singleUpload = async (_, { file }) => {
    return mutation.storeUpload(file);
}

module.exports = {
    singleUpload
}
