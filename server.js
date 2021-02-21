const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')

const indexRoutes = require('./routes/index')
const blogRoutes = require('./routes/blog')

dotenv.config({ path: './config/config.env' })

connectDB()

const PORT = process.env.PORT || 5000

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/', indexRoutes)
app.use('/blogs', blogRoutes)

app.use((req, res) => {
  res.status(404).render('404', {
    pageTitle: '404'
  })
})

app.listen(PORT, () => console.log(`Server is running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
