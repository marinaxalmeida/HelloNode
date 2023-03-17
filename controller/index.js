module.exports = {
    getdata(req, res) {
        let {nome, idade} = req.params
        
        res.json({"nome":nome, "idade": idade})
    },

    postdata(req, res) {
        res.json({"status": "sucesso"})
    }
}