const { where } = require('sequelize');
const user = require('../models/user.models');



const getallblogpost = async (req, res, next) => {
    //res.json({message: "GET all user"});
    try {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const offset = (page - 1) * limit;
        const users = await user.findAll({ limit, offset });
        res.status(200).json({
            response: "All users",
            users: users
        })
    } catch (error) {
        console.log(error);

    }

};




const newblogpost = async (req, res) => {
    // res.json({message: "GET all user by id "});
    try {
        const userNew = await user.create({
            title: req.body.title,
            description: req.body.description,
            Newcomment: req.body.Newcomment,
            attachment: `http://localhost:3000/profile/${req.file.filename}`
            //attachment: req.file.path,

        });
        //console.log(req.file);
        console.log(userNew);
        res.status(201).json(userNew);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Internal server error' });
    }

};

// const newblogpostcomment = async (req, res) => {
//     try {
//         let title = req.params.title;
//         const users = await user.update(
//             {comment: req.body.comment},
//             {where: title},
//         )
//         if (!users) {
//             res.json({
//                 message: "user not found"
//             });
//         }
//         // await user.update({
//         //     where: {title},
//         // })



//     } catch (error) {
//         console.log(error);
//     }
// };


const deleteblogpostById = async (req, res) => {
    try {
        const id = req.params.id;
        const utser = await user.findByPk(id);
        if (utser) {
            await user.destroy({
                where: { id }
            }
            );
            res.json({ message: "User deleted successfully" })
        }
        else {
            res.status(404).json({
                message: "User not found "
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server error"
        })
    }


};

const deleteblogpost = async (req, res) => {

    try {
        await user.destroy({
            where: {}
        })
        res.json({ message: "all deleted successfully" })



    } catch (error) {
        console.log(error);

    }


};

const deleteblogpostBytitle = async (req, res) => {
    try {
        let title = req.params.title;
        const post = await user.findOne({
            where: {
                title
            }
        })
        if (!post) {
            res.json({
                message: "post not found"
            });
        }
        await user.destroy({
            where: {
                title
            }
        });
        res.json({ message: "post deleted successfully" })


    } catch (error) {
        console.log(error);

    }

};



module.exports = {
    getallblogpost,
    newblogpost,
    //newblogpostcomment,
    deleteblogpostById,
    deleteblogpost,
    deleteblogpostBytitle,





};