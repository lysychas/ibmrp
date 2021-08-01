const router = require("express").Router();
const Query = require("../models/Query");

const showResults = async (imgUrl) => {
  // Imports the Google Cloud client library
  const vision = require("@google-cloud/vision");
  // Creates a client
  const client = new vision.ImageAnnotatorClient();
  // Performs label detection on the image file
  const [result] = await client.labelDetection(imgUrl);
  const labels = result.labelAnnotations;
  return labels.map((label) => {
    return label.description;
  });
};

// process image and save query - C
router.post("/", async (req, res) => {
  const { imgUrl } = req.body;
  const results = await showResults(imgUrl);
  const newQuery = new Query({
    imgUrl: imgUrl,
    foundObjects: results,
  });
  try {
    const savedQuery = await newQuery.save();
    const { id, createdAt, updatedAt, __v, ...other } = savedQuery._doc; // any container will do, it's just for temp storage
    // return res.status(200).json(other);
    return res.status(200).json(results);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get query by id - R
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const query = await Query.findById(id);
    return res.status(200).json(query);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get last 5 queries - R
router.get("/", async (req, res) => {
  try {
    const query = await Query.find().sort({ $natural: -1 }).limit(5);
    return res.status(200).json(query);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
