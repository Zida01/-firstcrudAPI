const UserController = require('../controllers/controller.user');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: './upload/images',

    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)

    }


});

const uploadImg = multer({ storage: storage });


//const bodyParser = require('body-parser');
const router = require('express').Router();

//router.use(bodyParser.json());

// get all post in database ( pagination)
router.get('/all', UserController.getallblogpost);

// create a new post
router.post('/all', uploadImg.single('image'), UserController.newblogpost, (req, res) => {

});

// get post by id
//router.delete('/all/:id',  UserController.deleteblogpostById);
router.delete('/all/u/:tit', UserController.deleteblogpostBytitle);

router.delete('/all', UserController.deleteblogpost);


// add comment to post 
//router.put ('/all/:title',UserController.newblogpostcomment)






module.exports = router;




