import express ,{ Request , Response} from "express"

const app =express()

app.use(express.json())


app.get("/",(req:Request,res:Response)=>{
    res.send("hello ")

})

app.listen(4000,()=>{
    console.log("server is listening at port 4000")
})