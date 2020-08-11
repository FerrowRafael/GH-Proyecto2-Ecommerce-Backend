const Multer = require('multer');
const mimetypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'video/mp4'];
const generateUploadImageMulter = path => Multer({
    storage: Multer.diskStorage({
        destination: (req, file, cb) => cb(null, path),
        filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
    }),
    fileFilter: (req, file, cb) => {
        if (mimetypes.includes(file.mimetype)) cb(null, true)
        else cb(null, false)
    },
    limits: { fileSize: 2 * 1024 * 1024 }
});
const uploadPublicationsImages = generateUploadImageMulter('./public/images/publications');
const uploadUserProfileImages = generateUploadImageMulter('./public/images');
const uploadUserHeaderImages = generateUploadImageMulter('./public/images/user/header');
const uploadCommentImages = generateUploadImageMulter('./public/images/user/comments');
const uploadMessageImages = generateUploadImageMulter('./public/images/user/messages');


module.exports = { uploadUserProfileImages, uploadPublicationsImages, uploadUserHeaderImages, uploadCommentImages, uploadMessageImages };

