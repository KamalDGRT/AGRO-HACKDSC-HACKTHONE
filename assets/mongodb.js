var mongodb = require('mongodb').MongoClient

var url = 'mongodb+srv://amshenshanu:texkidev@texkidevelopers.4vbb0.mongodb.net/FreshAndCheap'

var state ={
    db:null
}

module.exports.connect = ()=>{
  const dbname = 'FreshAndCheap'
  
  mongodb.connect(url,{useUnifiedTopology: true },(err,data)=>{
      if(err){
          return err
      }else{
            console.log('\n\nDatabasse loaded!!')
          state.db=data.db(dbname)
          
      }
  })
}

module.exports.get = ()=>{return state.db}