const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");
const multer = require('multer');
const {v4} = require('uuid');

const router = express.Router();

const dashboards = require('../controllers/dashboardController');
const courses = require('../controllers/courseController');
const Assessments = require('../controllers/assessmentController');
const Notification = require('../controllers/notificationController');
const Profile = require('../controllers/profileController');
const Admin = require('../controllers/adminController');
const Loan = require('../controllers/loanController');
const Leaderboard = require('../controllers/leaderboardController');
const Moonquiz = require('../controllers/moonRaceController');


  //    ----------------file uploads ----------------


const DIR = "public/uploads/courses/";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, v4() + '-' + fileName)
    }
});

var upload = multer({storage:storage});


//_______________________________ Dashboard routers_______________________________

router.route("/dashboard/statistics").get(catchErrors(dashboards.statistics));
router.route("/dashboard/courses").get(catchErrors(courses.list));
router.route("/dashboard/notice").get(catchErrors(dashboards.notice));

//_______________________________ Courses routers_______________________________

router.route("/addcourse/savecourse").post( courses.creatMiddleware, upload.array('file'), catchErrors(courses.create));
router.route("/courses/list/:id").get(Notification.delCourseMiddleware,  catchErrors(courses.list));
router.route("/courses/take").post(catchErrors(courses.take));
router.route("/courses/enroll").post(catchErrors(courses.enroll));
router.route("/courses/pushreview").post(catchErrors(courses.pushreview));
router.route("/owncourses/:email").get(catchErrors(courses.ownCourses));
router.route("/courses/delete/file").post(catchErrors(courses.deleteFile));
router.route("/courses/update").post( upload.array('file'), catchErrors(courses.update));
router.route("/courses/announcement").post(catchErrors(courses.newAnnouncement));
router.route("/courses/delete/currentCourse/:courseId").get(catchErrors(courses.deleteCourse));

//_______________________________ Assessments routers_______________________________

router.route("/assessments/assessments/list/:id").get(Notification.delAssessMiddleware, catchErrors(Assessments.list));
router.route("/assessments/assessments/create").post(Assessments.creatMiddleware, catchErrors(Assessments.create));
router.route("/assessments/assessments/edit/:email").get(catchErrors(Assessments.edit));
router.route("/assessments/assessments/editQuestion/:id").get(catchErrors(Assessments.questionList));
router.route("/assessments/assessments/saveQuestion").post(catchErrors(Assessments.questionSave));
router.route("/assessments/assessments/deleteQuestion").post(catchErrors(Assessments.questionDelete));
router.route("/assessments/assessments/delete/:id").get(catchErrors(Assessments.Delete));
router.route("/assessments/assessments/editAssess/:id").get(catchErrors(Assessments.editAssess));
router.route("/assessments/assessments/updateAssess").post(catchErrors(Assessments.updateAssess));
router.route("/assessments/assessments/getScore/:id").get(catchErrors(Assessments.getScore));
router.route("/assessments/assessments/pushScore").post(catchErrors(Assessments.pushScore));
router.route("/assessments/assessments/editquiz/:id").get(catchErrors(Assessments.editquiz));
router.route("/assessments/assessments/updateGamification").post(catchErrors(Assessments.updateGamification));

router.route("/assessments/assessments/dateline").post(catchErrors(Assessments.getDateline));
router.route("/assessments/assessments/getScoreObj").post(catchErrors(Assessments.getScoreObj));
router.route("/assessments/assessments/pushScoreObj").post(catchErrors(Assessments.pushScoreObj));
router.route("/assessments/assessments/getScoreWri").post(catchErrors(Assessments.getScoreWri));
router.route("/assessments/assessments/pushScoreWri").post(catchErrors(Assessments.pushScoreWri));
router.route("/assessments/assessments/myscores/:email").get(catchErrors(Assessments.myScores));
router.route("/assessments/assessments/game/getStart").post(catchErrors(Assessments.gameStart));
router.route("/assessments/assessments/game/nextStep").post(catchErrors(Assessments.nextStep));
router.route("/assessments/assessments/func/buyfifty").post(catchErrors(Assessments.buyfifty));
router.route("/assessments/assessments/func/usefifty").post(catchErrors(Assessments.usefifty));
router.route("/assessments/assessments/func/buyVetoPower").post(catchErrors(Assessments.buyVetoPower));
router.route("/assessments/assessments/func/useveto").post(catchErrors(Assessments.useveto));
router.route("/assessments/assessments/func/skip").post(catchErrors(Assessments.skip));

//_______________________________ Moonquiz editing routers_______________________________

router.route("/assessments/moonquiz/create").post(Moonquiz.creatMiddleware, catchErrors(Moonquiz.create));
router.route("/assessments/moonquiz/edit/:id").get(catchErrors(Moonquiz.edit));
router.route("/assessments/moonquiz/delete/:id").get(catchErrors(Moonquiz.Delete));
router.route("/assessments/moonquiz/editQuestion/:id").get(catchErrors(Moonquiz.questionList));
router.route("/assessments/moonquiz/saveQuestion").post(catchErrors(Moonquiz.questionSave));
router.route("/assessments/moonquiz/deleteQuestion").post(catchErrors(Moonquiz.questionDelete));
router.route("/assessments/moonquiz/editquiz/:id").get(catchErrors(Moonquiz.editAssess));
router.route("/assessments/moonquiz/updateAssess").post(catchErrors(Moonquiz.updateAssess));
router.route("/assessments/moonquiz/saveNarrative").post(catchErrors(Moonquiz.saveNarrative));
router.route("/assessments/moonquiz/getnarrative/:id").get(catchErrors(Moonquiz.getnarrative));

//_______________________________ Moonquiz game routers_______________________________


router.route("/assessments/moonquiz/list").get(catchErrors(Moonquiz.list));
router.route("/assessments/moonquiz/getNarrative").post(catchErrors(Moonquiz.getNarrative));
router.route("/assessments/moonquiz/getStart").post(catchErrors(Moonquiz.getStart));
router.route("/assessments/moonquiz/nextStep").post(catchErrors(Moonquiz.nextStep));
router.route("/assessments/moonquiz/func/buytime").post(catchErrors(Moonquiz.buytime));
router.route("/assessments/moonquiz/func/streakenable").post(catchErrors(Moonquiz.streakenable));
router.route("/assessments/moonquiz/func/buyVetoBoost").post(catchErrors(Moonquiz.buyVetoBoost));
router.route("/assessments/moonquiz/func/useveto").post(catchErrors(Moonquiz.useveto));


//_______________________________ Notification routers_______________________________

router.route("/notifications/get/:id").get(catchErrors(Notification.getList));

//_______________________________ adminPanel routers_______________________________


router.route("/admin/users/list").get(catchErrors(Admin.userlist));
router.route("/admin/users/allow/:id").get(Notification.delCourseMiddleware, Notification.delAssessMiddleware, catchErrors(Admin.allow));
router.route("/admin/users/delete/:id").get(catchErrors(Admin.delete));
router.route("/admin/users/edit/:id").get(catchErrors(Admin.edit));
router.route("/admin/users/update").post(catchErrors(Admin.update));
router.route("/admin/courses/list").get(catchErrors(Admin.courselist));
router.route("/admin/courses/delete/:id").get(catchErrors(Admin.deleteCourse));
router.route("/admin/assessments/delete/:id").get(catchErrors(Admin.deleteAssessment));
router.route("/admin/pushnotification").post(catchErrors(Admin.pushNotification));

//_______________________________ profile routers_______________________________

router.route("/account/profile/updateAvartar").post(catchErrors(Profile.updateAvartar));
router.route("/account/profile/updateSuttle").post(catchErrors(Profile.updateSuttle));
router.route("/account/profile/updatename").post(catchErrors(Profile.updatename));
router.route("/account/profile/password").post(catchErrors(Profile.updatePassword));
router.route("/account/wallet/userlist/:userid").get(catchErrors(Loan.list));
router.route("/account/wallet/getOne").post(catchErrors(Loan.getOne));
router.route("/account/wallet/updateOne").post(catchErrors(Loan.updateOne));
router.route("/account/wallet/statistics/:id").get(catchErrors(Loan.statistics));

//_______________________________ movers & shakers routers_______________________________

router.route("/leaderboard/economic").get(catchErrors(Leaderboard.economicPillars));
router.route("/leaderboard/samaritans").get(catchErrors(Leaderboard.samaritans));
router.route("/leaderboard/wealthiest").get(catchErrors(Leaderboard.wealthiest));
router.route("/leaderboard/spenders").get(catchErrors(Leaderboard.spenders));
router.route("/leaderboard/streaks").get(catchErrors(Leaderboard.streaks));

//_______________________________ spin wheel routers_______________________________

router.route("/account/spinwheel").post(catchErrors(Profile.spinwheel));


module.exports = router;
