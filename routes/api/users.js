const express = require('express');
const router = express.Router();

// @route GET api/user/test
// @desc tests user route
// @access public
router.get('/test', (req, res)=>{
  res.json({msg: "Users Works"})
});

module.exports = router;