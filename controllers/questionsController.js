const Question = require('../models/questions');
const Option = require('../models/options');

module.exports.create = async function(req,res){

    console.log(req.url);
    console.log(req.body);
    //create the question
    await Question.create(req.body)
    .then((ques) => {
        console.log(ques);
        res.send(ques);
    })
    .catch((err) => {
        console.log("error in creating the question schema",err);
    });
}

module.exports.showDetails = async function(req,res){
        console.log(req.params.id);// remove this later
        const ques=await Question.findById(req.params.id).populate('options')
        if(ques){
            res.send(ques);
        }
        // if the Question does not exist
        else{
            res.send("Invalid ID: no such ID exists!");
        }
}

module.exports.deleteQues = async function(req,res){
    
        // in this the question will be deleted
        const ques= await Question.findById(req.params.id)
        .clone()
        .catch(function(err){ 
            console.log(err);
        });
        
        if(ques){
            // delete all the option ⁉️ of the option db having the question id as the req.params.id
            await Question.deleteOne(req.params.id).clone().catch(function(err){ console.log(err)})
            // deleting all the option of that question
            await Option.deleteMany({question:req.params.id}).clone().catch(function(err){ console.log(err)})
                res.send("ques deleted");
        }
        //  if the Question does not exist
        else{
            res.send("Invalid ID: no such ID exists!");
        }
}
