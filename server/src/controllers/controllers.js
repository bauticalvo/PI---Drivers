const {Driver} = require('../db')
const axios = require('axios')

const defaultImage = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fst3.depositphotos.com%2F9141348%2F14671%2Fv%2F450%2Fdepositphotos_146717605-stock-illustration-user-icon-vector.jpg&tbnid=4286uwW2fCuhSM&vet=12ahUKEwjDtvix77CDAxWyNDUKHeMUBysQMygCegQIARA5..i&imgrefurl=https%3A%2F%2Fdepositphotos.com%2Fes%2Fphotos%2Fsin-rostro.html&docid=E0xyy5WHSqq_qM&w=600&h=600&itg=1&q=imagen%20de%20persona%20sin%20cara&hl=es&ved=2ahUKEwjDtvix77CDAxWyNDUKHeMUBysQMygCegQIARA5'

const getDriversDB = async() => {
    const driversDB = await Driver.findAll();
    return driversDB;
}

const getDriversAPI = async()=>{
    const {data} = await axios.get('http://localhost:5000/drivers') 
    return data;
}

const getDrivers =async () =>{    
    const driversDB = await getDriversDB();
    const driversApi = await getDriversAPI();
    const allDrivers = [...driversDB, ...driversApi] //se puede cambiar el orden por como se muestra

    allDrivers.forEach(async driver=>{
        if(!driver.image){
            driver.image = defaultImage;
        }
    })
    return allDrivers;
}

    const getDriversId = async (id)=>{
        if(isNaN(id)){
            const idDriver = await Driver.findByPk(id)
        return idDriver;
        }
        const request = (await axios.get('http://localhost:5000/drivers')).data
        const filteredDrivers = request.find( (driver) => driver.id === Number(id) 
        )
        return filteredDrivers;
}

const postDrivers = async(forename, surname, image, dob, nationality, 
     description)=>{

        const driver = await Driver.findOrCreate({where: {
             forename, surname, image, dob, nationality, 
         description
        }})
        return driver;
   

}

module.exports = {getDrivers, postDrivers, getDriversId} ; 