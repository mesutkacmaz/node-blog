const express = require('express')
const router = express.Router()
const { getBlog, getCreateBlog, postCreateBlog, deleteBlog } = require('../controllers/blogController')

router.get('/create', getCreateBlog)
router.post('/', postCreateBlog)
router.get('/:id', getBlog)
router.delete('/:id', deleteBlog)

module.exports = router
