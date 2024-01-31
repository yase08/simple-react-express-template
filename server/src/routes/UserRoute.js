const express = require("express");
const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  exportUser,
  getUser,
} = require("../controllers/UserController");
const uploadPhoto = require("../libs/multer");
const { authMiddleware } = require("../middlewares/authentication");
const router = express.Router();

router.get("/", authMiddleware, getUsers);
router.get("/export", exportUser);
router.get("/:id", authMiddleware, getUser);
router.post("/", authMiddleware, uploadPhoto.single("image"), createUser);
router.delete("/:id", authMiddleware, deleteUser);
router.put("/:id", authMiddleware, uploadPhoto.single("image"), updateUser);

module.exports = router;
