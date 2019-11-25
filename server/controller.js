// Controller here
// complete building out the controller
const dbHelpers = require('../db/dbhelpers.js')

const controller = {
  get: (req, res) => {
    dbHelpers.getProductsHelper((err, data) => {
      if (err) {
        res.status(404).send("Cant get the data!!")
      } else {
        res.status(200).send(data)
      }
    })
  },
  post: (req, res) => { },
  put: (req, res) => {
    // console.log(req.body)
    dbHelpers.updateProductHelper(req, (err, data) => {
      if (err) {
        res.status(404).send("Cant update the data!")
      } else {
        res.status(200).send(data)
      }
    })
  },
  delete: (req, res) => { }
}

module.exports = controller