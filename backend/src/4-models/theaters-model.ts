class TheatersModel{
    public theatersId:number
    public theatersName:string

    public constructor(theater: TheatersModel){
        this.theatersId = theater.theatersId
        this.theatersName = theater.theatersName
    }
}

export default TheatersModel