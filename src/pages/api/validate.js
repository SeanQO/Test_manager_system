import db from '../../utils/db'

export default async function handler(req,res){
    const {method , body} = req;
        if (method === "POST"){
            console.log(body.uname+ "********************" + body.psw);
            try {
                let response = await db.query('SELECT * FROM USERS WHERE Username = $1 AND Password = $2',[body.uname, body.psw])

                if (response.rows && response.rows.length > 0) {
                    console.log("pass");
                    res.json({
                        uname: body.uname
                    })

                }else{
                    res.json({
                        uname: ""
                    })
                }

                
            } catch (error) {
                console.log(error)
            }
            
        }else{
            res.status(404)
        }
        

}