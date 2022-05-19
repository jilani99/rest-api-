const express=require('express');
const {default:mongoose}=require('mongoose');
const app=express();
const router=express.Router()
const User=require('./models/User')

//connexion with server
const mongUri="mongodb+srv://Amina123:Amina123@cluster0.vm75m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//parse the data
app.use(express.json())
mongoose.connect( mongUri, (err) => { err? console.log(err) : console.log("Database is connected")})

const port = 6000;
app.listen( port, (err) => { err? console.log(err) : console.log("Server is running")});
/////////////////////////// create the Routes ///////////////////////////////////// 
// POST :  ADD A NEW USER TO THE DATABASE 
app.use('/user', router.post("/newuser" , (req,res) => {
    let newUser= new User(req.body)
    newUser.save((err, data) => {
        err?  console.log(err): res.send("New User was added")
    })
}))

 // GET :  RETURN ALL USERS

 app.use('/user', router.get("/all", (req, res) => {
    User.find({}, (err, data) => {
      err ? console.log(err) : res.json(data);
    })
  }))


// PUT : EDIT A USER BY ID 

app.use('/user' , router.get("/:id", (req, res) => {
    User.find({ _id: req.params.id }, (err, data) => {
      err ? console.log(err) : res.json(data);
    })
  }))


// DELETE : REMOVE A USER BY ID 
app.use('/user' , router.delete("/deletecontact/:id", (req, res) => {
    User.findByIdAndDelete({ _id: req.params.id }, (err, msg) => {
      err ? console.log(err) : res.json({ msg: "contact deleted" });
    })
  }))