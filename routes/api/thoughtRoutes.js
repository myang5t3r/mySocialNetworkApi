const router = require("express").Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtResponse,
  removeThoughtResponse,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThought).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/responses
router.route("/:thoughtId/reactions").post(addThoughtResponse);

// /api/thoughts/:thoughtId/responses/:responseId
router.route("/:thoughtId/reactions/:reactionId").delete(removeThoughtResponse);

module.exports = router;
