class ContactController {
    static getContact(req, res) {
        res.render('contact',{
            title:'Contact'
        });
    }
}

module.exports = ContactController;