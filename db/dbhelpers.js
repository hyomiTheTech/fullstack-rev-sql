// complete and fix the dbhelpers
const db = require('./index.js')


module.exports = dbhelpers = {
    getProductsHelper: (callback) => {
        db.query(`SELECT * FROM items`, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    },
    postProductsHelper: () => { },

    updateProductHelper: (req, callback) => {
        console.log(req.body.curr_bid)
        db.query(`update items set curr_bid="${req.body.curr_bid}" where items.id="${req.params.id}";`, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    },

    deleteProductHelper: () => { }

}
// item name
// current bid
// bids ends in 
// image
