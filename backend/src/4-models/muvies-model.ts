class MuviesModel{
    public muvieId:number
    public theatersId:number
    public muvieName:string
    public dateTime:string
    public duration:number

    public constructor(muvies: MuviesModel){
        this.muvieId = muvies.muvieId
        this.theatersId = muvies.theatersId
        this.muvieName = muvies.muvieName
        this.dateTime = muvies.dateTime
        this.duration = muvies.duration
    }
}

export default MuviesModel