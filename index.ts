import express ,{ Request ,  Response} from "express"
import  {PrismaClient} from "@prisma/client"

const app =express()
const prisma = new PrismaClient()

app.use(express.json())


app.get("/",(req:Request,res:Response)=>{
    res.send("hello ")

})

app.get("/users",async (_,res:Response)=>{
    const users = await prisma.user.findUnique({
        where:{id :3}
    })
    res.json(users)

})


app.listen(4000,()=>{
    console.log("server is listening at port 4000")
})