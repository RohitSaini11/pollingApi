const Option=require('../models/options');
const Question= require('../models/questions');

module.exports.create=async function(req,res){
    // in this we will create the options to the id given question 
    console.log(req.body,req.params.id);

    const opt=await Option.create({
        option:req.body.option,
        question:req.params.id,
    });

    // it is for adding the vote to option of the id that is given by mongodb by update query and using the string interpolition
    const updateOpt = await Option.findByIdAndUpdate(opt._id,{"add_vote":`http://localhost:8080/api/options/${opt._id}/add_vote`});
    updateOpt.save()

    // now searching the question so that we can append the option in question-->option array
    const ques = await Question.findById(req.params.id);
    
    if(ques){
        ques.options.push(updateOpt);
        ques.save();

        console.log(ques);
        res.send(ques); 
    }
    else{
        res.send('question does not exists');
    }
}

module.exports.add_vote = async function(req,res){
    // in this votes will be added to the particular option of the question
    console.log(req.params.id);

    // to increase the vote
    const opt = await Option.findByIdAndUpdate(req.params.id,{ $inc: { vote: 1 }})
    if(opt){
        await opt.save();
        console.log(opt);
        res.send(opt)
    }
    // handling the bad requests
    else{
        res.send('Invalid Option Id : no such option found!');
    }
}

module.exports.delete = async function(req,res){
    // delete the id option 
    console.log('id',req.params.id);

    //fetch the option 
    const opt = await Option.findById(req.params.id);
    if(opt){
        // extract the question id of the option
        const quesId = opt.question;
        
        // remove the option from the question
        const ques=await Question.findByIdAndUpdate(quesId,{ $pull: {options:req.params.id} });

        // delete that option
        await Option.findByIdAndDelete(req.params.id);

        console.log(ques);//remove this line 

        res.send('Option removed successfully!');
    }
    // if the id is not correct
    else{
        res.send('Invalid Option ID : no such option found!');
    }
}
