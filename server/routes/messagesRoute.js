const { getAllMesage, addMessage } = require("../controllers/messagesController");

const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getAllMesage);

module.exports = router;