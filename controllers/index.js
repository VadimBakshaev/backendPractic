class IndexController {
    static getIndex(req, res) {
        res.render('index',{
            title:'Index'
        });
    }
}

module.exports = IndexController;