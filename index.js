const express = require('express')
const app = express()
const all = require('./all.json')

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
</table>
`

  res.send(page)
})

app.get('/api/all', (req, res) => {
  res.json(all)
})

const PORT = process.env.PORT || 3001 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})