

class SiteController {
    home(req,res, next){
        res.render('index',{
            title: 'Cổng thông tin đào tạo',
            user: {
                name:'Đỗ Gia Huy',
                mssv:'207PM27416'
            }
        });
    }
}

module.exports = new SiteController();