import db from '../../../utils/db'

export default async function handler(req,res){
    let response = await db.query('SELECT * FROM USERS')

    res.json(response.rows)
}