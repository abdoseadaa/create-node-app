exports.root = (req, res) => {

    res.render("index")

}

exports.error = (req, res) => res.render('error', { code: 404, msg: 'not found !' })