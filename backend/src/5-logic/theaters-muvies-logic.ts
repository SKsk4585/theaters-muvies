import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import MuviesModel from "../4-models/muvies-model";
import TheatersModel from "../4-models/theaters-model";
import { ResouceNotFoundErrorModel } from "../4-models/error-model";




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

async function addMuvies(muvie:MuviesModel):Promise<MuviesModel>{
    const sql = `INSERT INTO muvies 
    VALUES (DEFAULT,
            ${muvie.theatersId},
            '${muvie.muvieName}',
            '${muvie.dateTime}',
            '${muvie.duration}'
            )`
    const info:OkPacket = await dal.execute(sql)
    muvie.muvieId = info.insertId
    return muvie
}

async function deleteMuvie(id:number):Promise<void>{
    const sql = `DELETE FROM muvies
                 WHERE muvieId = ${id}`

    const info:OkPacket = await dal.execute(sql)
    if (info.affectedRows === 0) throw new ResouceNotFoundErrorModel(id)
    
}
    


export default{
    getAllTheaters,
    getAllMuviesByTheaters,
    addMuvies,
    deleteMuvie
}