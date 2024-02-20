const router = require("express").Router();

const workShopController = require("../controllers/WorkshopController");

router.post("/workshop", workShopController.createWorkshop);

router.get("/workshops", workShopController.getAllWorkshops);

router.get("/workshops/:id", workShopController.getWorkshopsById);

router.delete("/wokshops/:id", workShopController.deleteWorkshop);

router.put("/workshops/:id", workShopController.updateWorkshop);

module.exports = router;