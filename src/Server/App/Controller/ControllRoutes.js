import dbConection from "../../Config/dbConection";

const getIndex = (req, res) => {
        
   res.render('index');
};

///Investigacion-Desarrollo/Content
const getHomeContent = (req, res) => {
    console.log('Component rendered satisfactorily');
};


///Api-Investigacion-Desarrollo/Content
const getApi = (req, res) => {
    dbConection.query('SELECT * FROM HOMECONTENT',(err, result)=>{
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
