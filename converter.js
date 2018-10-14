/*const csvFilePath = 'customer-data.csv'
const fs = require('fs')
const csv = require('csvtojson')
let arr = []
csv()
  .fromFile(csvFilePath)
  .on('json',(jsonObj)=>{
    arr.push(jsonObj)
  })
  .on('done',(error)=>{
    if (error) return process.exit(1)
    console.log(arr)
    fs.writeFile('customer-data.json', JSON.stringify(arr, null, 2), (error)=>{
      if (error) return process.exit(1)
      console.log('done')
      process.exit(0)
    })
  }
)*/
const csvtojson = require('csvtojson');
const path = require('path');
const fs = require('fs');

const csvFilePath = path.join(__dirname, 'customer-data.csv');
csvtojson()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        fs.writeFileSync(path.join(__dirname, 'customer-data.json'), JSON.stringify(jsonObj), 'utf-8');
        console.log("**--** Archivo Convertido Listo **--**")
    });