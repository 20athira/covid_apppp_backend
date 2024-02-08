const express=require("express")
const cors=require("cors")
const  mongoose=require("mongoose")

const app=express()
const patientRoute=require("./controller/patientRouter")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://AthiraRam:athira235@cluster0.orujzdx.mongodb.net/patientssdb?retryWrites=true&w=majority",{
  useNewUrlParser:true
}
)


app.use("/api/patients",patientRoute)

app.listen(3001,()=>{
    console.log("Server running")
})