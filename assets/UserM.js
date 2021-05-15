const db = require('./mongodb')
const config = require('./config').config

module.exports = {
    test:()=>{
        return new Promise(async(resolve,reject)=>{
            var data=await db.get().collection(config.PRODUCTS).find().toArray()
            // console.log(data);
            resolve(data)
        })
    },
    addPrdt:(data)=>{
        return new Promise(async(resolve,reject)=>{
            db.get().collection(config.PRODUCTS).insertOne(data).then(d=>{
                resolve(d.ops[0]);
            })
        })
    }
}