import connection from "../../Config/dbConection";



const getIndex = (req, res) => {
    
    res.send(connection);
};

///Investigacion-Desarrollo/Content
const getHomeContent = (req, res) => {
    console.log('Component rendered satisfactorily');
};


///Api-Investigacion-Desarrollo/Content
const getApi = (req, res) => {
    
    connection.query('SELECT * FROM HOMECONTENT',(err, result)=>{
        console.log("Query: ",result);
        console.log("Error: ",err);
        res.send(result);
       

    });
    

   
}

module.exports = {
    getIndex,
    getHomeContent,
    getApi
};
