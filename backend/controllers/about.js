class AboutController {
    static getAbout(req, res) {
       res.render('about',{
            title:'About'
        });
    }
}

module.exports = AboutController;