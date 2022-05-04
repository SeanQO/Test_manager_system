import db from '../../utils/db'

export default async function handler(req,res){
    const {method , body} = req;
        if (method === "POST"){
            console.log(req)

            const {uname, psw, type} = body

            try {
                let response = await db.query('INSERT INTO USERS (Username, Password, Type) VALUES ($1,$2,$3)',[uname, psw, type])

                res.send({
                    response: "hello world"
                });
            } catch (error) {
                console.log(error)
           }
            
        }else{
            res.status(404)
        }
        

}