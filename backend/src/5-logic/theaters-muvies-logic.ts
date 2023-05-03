import dal from "../2-utils/dal";
import MuviesModel from "../4-models/muvies-model";
import TheatersModel from "../4-models/theaters-model";




async function getAllTheaters():Promise<TheatersModel[]>{
    const sql = `SELECT * FROM theaters`
    const theaters = await dal.execute(sql)
    return theaters
}

async function getAllMuviesByTheaters(theatersId:number):Promise<MuviesModel[]>{
    const sql = `SELECT M.*, T.theatersName
                FROM muvies AS M JOIN theaters AS T
                ON M.theatersId = T.theatersID
                WHERE M.theatersId = ${theatersId}`
    const muvies = await dal.execute(sql)
    return muvies

}
    


export default{
    getAllTheaters,
    getAllMuviesByTheaters
}