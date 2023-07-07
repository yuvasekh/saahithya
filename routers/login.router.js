const { register } = require("../Controllers/Register");
const {login}=require('../Controllers/login')
const {verifyotp}=require('../Controllers/verifyotp')
const basePath = "/register"
module.exports = (app) => {
  console.log("inside ");
  app.route(basePath).post(register);
  app.route("/login").post(login);
  app.route('/verifyotp').post(verifyotp)
  // app.route(basePath).post(addProjects)
  // app.route(basePath+projectByid).get(getProjectsById)
  // app.route(basePath+files).get(getFiles)
  // app.route(basePath+uploadpath).post(uploadFiles)
  // app.route(basePath+trains).post(train);
  // app.route(basePath+querys).post(query);
  // app.route(basePath+deletefiles).delete(deleteFile);
  // app.route(basePath+deleteProjects).delete(deleteProject);
  // app.route(basePath+trainingStatuses).get(trainingStatus);
  // app.route(basePath+resetTrainings).post(resetTraining);
  // app.route(basePath+up).put(modifyProject);
  // app.route(chat).post(Chatusers);
};