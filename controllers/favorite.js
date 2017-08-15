function user(req, res){
	var name;
    req.params.name? name=req.params.name : name='guest';
    res.status(200).
        send('hello ' + name);
}

module.exports = {user}