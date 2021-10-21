const mySql = require('mysql')

const db = mySql.createPool({
    host: "localhost",
    user: "root",
    password: "011298",
    database: "Coins",
  });

  let info = undefined

function query(){
    return new Promise((resolve, reject)=>{

        const sqlQuery = "SELECT * from estudiantes";
        const resultado = db.query(sqlQuery,  (err,r,field)=>{
            if(err){
                db.end()
                reject(err)
                throw err
            }else{
                db.end()
                resolve(r)
            }
            
        })
    })

}


const x = query()
.then(r=>{console.log(r)})
.catch(err =>{console.log(err)})






