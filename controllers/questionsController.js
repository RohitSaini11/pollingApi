const Question = require('../models/questions');
const Option = require('../models/options');

module.exports.create = async function(req,res){

    //create the question
    await Question.create(req.body)
    .then((ques) => {
        //question created
        console.log(ques);
        res.send(ques);
    })
    .catch((err) => {
        console.log("Error in creating the question schema",err);
    });
}

module.exports.showDetails = async function(req,res){
        console.log(req.params.id);// remove this later

        const ques = await Question.findById(req.params.id).populate('options');
        if(ques){
            res.send(ques);
        }
        // if the Question does not exist
        else{
            res.send("Invalid Question ID: no such question Found!");
        }
}

module.exports.deleteQues = async function(req,res){
    
        // in this the question will be deleted
        const ques = await Question.findById(req.params.id)
        .clone()
        .catch(function(err){ 
            console.log(err);
        });
        
        if(ques){
            //delete the question
            await Question.deleteOne(req.params.id)
            .clone()
            .catch(function(err){ 
                console.log(err);
            });

            // delete all the option of that question
            await Option.deleteMany({question:req.params.id})
            .clone()
            .catch(function(err){ 
                console.log(err);
            });

            res.send("Question Removed successfully!");
        }

        //  if the Question does not exist
        else{
            res.send("Invalid Question ID: no such question Found!");
        }
}
