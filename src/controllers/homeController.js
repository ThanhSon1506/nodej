import db from '../models/index';
import CRUDservice from '../services/CRUDservice';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
}
let getCRUD = (req, res) => {
    try {
        return res.render('crud.ejs')
    } catch (error) {
        console.log(error);
    }
}
let postCRUD = async (req, res) => {
    try {
        console.log(req.body);
        let message = await CRUDservice.createNewUser(req.body);
        console.log(message);
    } catch (error) {
        console.log(error);

    }
}
let displayGetCRUD = async (req, res) => {
    try {
        let data = await CRUDservice.getAllUser();
        console.log(data);
        return res.render("displayCRUD.ejs", {
            dataTable: data
        });
    } catch (error) {

    }
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
}