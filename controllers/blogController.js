const Blog = require('../models/Blog')

exports.getBlog = async (req, res) => {
  try {
    const id = req.params.id
    const blog = await Blog.findById(id)

    res.render('details', {
      blog,
      pageTitle: 'Blog Details'
    })
  } catch (err) {
    console.log(err)
    res.render('404', { pageTitle: 'Blog Not Found!' })
  }
}

exports.getCreateBlog = (req, res) => {
  res.render('create', {
    pageTitle: 'Create A New Blog'
  })
}

exports.postCreateBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body)
    await blog.save()
    console.log('Created Blog')
    res.redirect('/')
  } catch (err) {
    console.log(err)
  }
}

exports.deleteBlog = async (req, res) => {
  try {
    const id = req.params.id
    await Blog.findByIdAndDelete(id)
    console.log('Blog Deleted')
    res.json({ redirect: '/' })
  } catch (err) {
    console.log(err)
  }
}
