// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* import db from 'data/db.json'; */

let fs = require('fs');
let db = require('data/db.json');

export default function handler(req, res) {
  /* console.log(req.body);
  db.push(req.body)
  console.log(db) */
  const { method, body } = req;
  switch (method) {
    case 'GET': dataGet(); break;
    case 'POST': dataCreate(); break;
    case 'DELETE': dataDelete(); break;
    case 'PUT': dataUpdate(); break;
  }


  function fsFn() {

    fs.writeFileSync('data/db.json', JSON.stringify(db));
    res.send(db);
  }
  function dataCreate() {
    db.push(body);
    fsFn();

  }
  function dataUpdate() {

    /*   db.map((obj,key)=>{
        if(obj.id == body.id){
          obj.name = body.name;
          obj.email = body.email;
          obj.tel = body.tel;
        }
      }) */

    let user = db.find(obj => obj.id == body.id);
    Object.assign(user, body)
    fsFn();


  }
  function dataDelete() { 
    db = db.filter(obj=>obj.id != body.id);
    fsFn()

  }

  function dataGet() {

    res.send(db);
  }



}
