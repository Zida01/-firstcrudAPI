const multer = require('multer');
const { where } = require('sequelize');
const user = require('../models/user.models');



const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)

    }
})
// filter file type to be

const audiobookFilter = (req,file, cb ,next) => {
    if (file.mimetype == "audio/mp4a-latm" || file.mimetype == "audio/mpeg" || file.mimetype == "application/zip" || file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/jpg") {
         cb(null, true)
       
    } else { 
        cb(null, false)
        return cb ( new Error('fghjk'));
             
     }

}


const imageUpload = multer({
    // create a folder called images
    // filesize is in byte   ==--1kb --- 1000btyes, 10kb==10000btye, 100kb== 100000btye
    storage: storage,
    limits: {
        fileSize: 100000000
    },
    fileFilter: audiobookFilter
});




module.exports = {
   imageUpload
   



};