const express = require('express')
const app = express()
const all = require('./all.json')
const countries = require('./countries.json')

app.get('/', (req, res) => {
  const page = `
<h2>Rest Countries</h2>

<p>Get information about countries via a RESTful API</p>

<table>
  <tr>
    <th>endpoint</th>
    <th>description</th>
  </tr>
  <tr>
    <td><a href='api/all'>/api/all</a></td>
    <td>All countries</td>
  </tr>
  <tr>
    <td><a href='/api/name/finland'>/api/name/{name}</a></td>
    <td>Search by country’s full name. It can be the common or official value</td>
  </tr>
</table>
`

  res.send(page)
})

app.get('/api/all', (req, res) => {
  res.json(all)
})

app.get('/api/name/:name', (req, res) => {
  const name = req.params.name.toLowerCase()

  const country = all.find(c => c.name.common.toLowerCase() === name || c.name.official.toLowerCase() === name )

  if (!country) {
    return res.status(404).json({ error: 'not found'})
  }

  res.json(country)
})

const PORT = process.env.PORT || 3001 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})