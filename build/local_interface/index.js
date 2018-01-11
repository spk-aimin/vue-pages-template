const testApi = require('./interface/test') //测试


const isUse = true //本地接口启用总开关
function interface(app) {
    if(isUse) {
        app.get('', function(req, res){

        })
        
        testApi(app)

    }
}

module.exports = interface