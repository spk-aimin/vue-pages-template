
const isUse = true //开关
function  test(app) {
    if(isUse) {
        app.get('/api/local/test', function(req, res) {
            res.send({code: 0, data: "test"});
        })
    }
}
module.exports = test