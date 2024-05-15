const fs = require("fs")

// reading text async

fs.readFile('./texts/read.txt', 'utf-8', (err, data)=>{
    if(err){
        throw Error("errror reading text")
    }
    console.log(data);
    // writing text asynchroniusly
    fs.writeFile('./texts/read2.txt', data , 'utf-8', (err)=>{
        if(err){
            throw Error('Error in writing file')
        }
    })
})