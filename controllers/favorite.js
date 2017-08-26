function test(req, res){
	var name;
    req.params.name? name=req.params.name : name='guest';
    res.status(200).
        send('hello ' + name);
}

function getUser(req, res){
	var id = req.params.id;
	res.status(200).send({"id": id, "key": "value"});
}

function setUser(req, res){
    var params = req.body;
    res.status(200).send({favorites: params});
}

function updateUser(req, res){
    var params = req.body;
    res.status(200).send({update: true, favorites: params});
}

function deleteUser(req, res){
    var id = req.params.id;
    res.status(200).send({delete: true, data: id});
}

module.exports = {
	test,
	getUser,
	setUser,
	updateUser,
	deleteUser
}
