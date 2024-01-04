const {getDrivers, postDrivers, getDriversId} =require('../controllers/controllers')

const getDriversHandler = async(req,res) =>{
    try {
        const response = await getDrivers()
        res.status(200).json(response)
    } catch (error) {
    return res.status(400).json({message: error.message})
    }
}

const getDriversIdHandler = async(req,res) =>{
    try {
        const {id} = req.params;
        const response = await getDriversId(id);
        res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}
/*
const getDriversNameHandler = async(req,res) =>{
    try {
            
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}
*/
const postDriversHandler = async(req, res) =>{
    try {
        const {forename, surname,image, dob, nationality, 
            description } = req.body;
        const response = await postDrivers(forename, surname,image, dob, nationality, 
             description);
        res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}


module.exports = {getDriversHandler, postDriversHandler, getDriversIdHandler}