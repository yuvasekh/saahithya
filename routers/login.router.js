const { register } = require("../Controllers/Register");
const {login}=require('../Controllers/login')
const {verifyotp}=require('../Controllers/verifyotp')
const {uploadFiles}=require('../Controllers/UploadFile')
const {getData}=require('../Controllers/getData')
const {getDataById}=require('../Controllers/getDataById')
const {topBooks}=require("../Controllers/topBooks")
const {latest}=require('../Controllers/latest')
const {categories}=require('../Controllers/categories')
const {TextEditor}=require('../Controllers/TextEditor')
const {addtocarts}=require('../Controllers/addtocart')
const {updatecart}=require('../Controllers/updatecart')
const {getCart}=require('../Controllers/getCart')
const {createpole}=require('../Controllers/contest')
// const {payment}=require('../Controllers/payemnt')
const basePath = "/register"
module.exports = (app) => {
  console.log("inside ");
  app.route(basePath).post(register);
  app.route("/login").post(login);
  app.route('/verifyotp').post(verifyotp)
  app.route('/uploadfile').post(uploadFiles)
  app.route('/getdata').post(getData)
  app.route('/getdatabyid').post(getDataById)
  app.route('/category/:categoryname').post(categories)
  app.route('/latest').get(latest)
  app.route('/trending').get(topBooks)
  app.route('/textupload').post(TextEditor)
  app.route('/addtocart').post(addtocarts)
  app.route('/getCart').post(getCart)
  app.route('/updatecart').put(updatecart)
  app.route('/createpole').put(createpole)
};