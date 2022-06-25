const express = require("express");
const router = express.Router();
// ROUTES
// const creatorRoutes = require("./routes/creators.routes");
// const transferRoutes = require("./routes/transfers.routes");

// router.use("/creators", creatorRoutes);
// router.use("/transfers", transferRoutes);

const userRoutes = require("./routes/users.routes")

router.use("/users", userRoutes)

router.use("*", (req, res) => {
  return res.status(404).json({
    message: "NOT_FOUND",
  });
});

module.exports = router;