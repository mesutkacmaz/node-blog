const express = require('express')
const router = express.Router()

const Blog = require('../models/Blog')

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find()
    res.render('index', {
      blogs,
      pageTitle: 'All Blogs'
    })
  } catch (err) {
    console.log(err)
  }
})

router.get('/about', (req, res) => {
  res.render('about', { pageTitle: 'About' })
})

module.exports = router
