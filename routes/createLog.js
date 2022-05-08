const express = require("express");
const logRouter = express.Router();
const LogModel = require('../models/logs')

const LogEntry = [
    {title: "Discovered treasure", entry: 'Morning', shipIsBroken: 'no'},
    {title: 'Hit the reef', entry: 'night', shipIsBroken: 'yes'},       
    {title: 'Met pirates', entry: '#', shipIsBroken: 'no'},
    {title: 'Must Refill rum barrels. Critically low levels', entry: 'dinner time', shipIsBroken: 'no'},
    {title: 'Rum is gone!!!The crew threatens with mutiny', entry: 'evening', shipIsBroken: 'no'},
    {title: 'Mutiny on board. Had to share my treasure with these rats', entry: 'midnight', shipIsBroken: 'no'}
    
]


    
// update entry
logRouter.put('/update/:id', (req, res)=>{
    const updateLogEntry = req. body
    LogModel.updateOne({_id: req.params.id}, updateLogEntry, (err, updateLogEntry)=>{
        if(err){
            res.status(404).json({message: err.message})
        }else{
            res.status(202).json(updateLogEntry)
        }
    })
})

// Delete route
logRouter.delete('createLog/:id', (req, res)=>{
    LogModel.deleteOne({_id:req.params.id},
        (err, deletedLogEntry)=>{
            if(err){
                res.status(404).json({mesage: err.message})
            }else{
                res.status(204).json({});
            }
        })

})


module.exports = logRouter;