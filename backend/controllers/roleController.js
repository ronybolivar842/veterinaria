import role from "../models/role.js";

const registerRole = (req, res) => {
    if(!req.body.name || !req.body.race || !req.body.weight || !req.body.height)
        return res.status(400).send({message: "Incomplete data"});

    let roleSchema = new role({
        name: req.body.name,
        race: req.body.race,
        weight: req.body.weight,
        height: req.body.height,
        dbStatus: true,
    });

    let result = role.Save();
    if(!result) return res.status(500).send({message: "Failed to register role"});

    res.status(200).send({ result});

};

export default { registerRole};