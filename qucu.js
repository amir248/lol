const express = require('express');
const app = express(),
  session = require('express-session'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

const fs =require('fs');
const path=require('path');
const mysql = require('mysql2');
const cors = require('cors');

app.use(express.static('public'));
console.log(__dirname);
app.set('views','public');
const jsonParser = express.json();
const port=3000;
const host = 'localhost';
app.set("view engine", "ejs");
// const multer  = require("multer");

const putChik='public/json/message.json';

const url = require('node:url');
const registerUrl=['https://qucu.ru','https://amir248.github.io/','http://localhost','http://localhost:3700','https://nasobe.ru'];
app.use(cors({
  origin:registerUrl,
  method:'post',
  optionsSuccessStatus: 200
}));

for(let r=0;r<=registerUrl.length-1;r++){
  // console.log(registerUrl[r]);
  // console.log(importantBag.id);
}
const importantBag={}
const okFolder='public/json/allDiscus';
const ok='ok';
// app.post('/comments/object/allow-cors',jsonParser,cors(),(request,response)=>{
//   if (!request.body) return response.sendStatus(400);
//   // console.log(request);
//   // let scriptComments=fs.readFileSync('public/script/script.js',"utf8",
//   // console.log(request.body);
//   // if (!request.body) return response.sendStatus(400);
//   console.log(request.body+'---');
//   // console.log(importantBag);
//   // fs.writeFile(newFile,'oK',{encoding: "utf8",flag:"w+"});
//   // fs.writeFile('/public/'+`${reqquest.body}`, '[{"userName":"messages"},{"Message","hero"}]', function(err){
//   //   if (err) {
//   //     console.log(err);
//   //   } else {
//   //     console.log("Файл создан");
//   //   }
//   // });
//   fs.stat(okFolder,(err,stats)=>{
//     if(err){
//       console.log('file non');
//         fs.mkdir('public/json/allDiscus/'+`${request.body.id}`, err => {
//          if(err) throw err; // не удалось создать папку
//          console.log('Папка успешно создана');
//        });
//        importantBag.id=request.body.id;
//     }else if(stats){
//       console.log('file EST');
//       fs.writeFileSync('public/json/allDiscus/'+`${request.body.id}`+'.json',JSON.stringify(request.body),{encoding: "utf8", flag: "w+"});
//       importantBag.id=request.body.id;
//       console.log(importantBag.id);
//     }else{
//       console.log('ELSE')
//     }
//   });
//   const importantBag=request.body;
//   // const newFile="public/"+JSON.stringify(request.body.site);
// //   fs.mkdir('public/'+request.body.id, err => {
// //    if(err) throw err; // не удалось создать папку
// //    console.log('Папка успешно создана');
// // });
//   (error,data)=>{
//     console.log("Async read file script");
//     if(error) throw error;
//     console.log(request.body);
//     // console.log(response);
//   };
//   response.send(request.body);
// });//post/object/allow-corse
// console.log(importantBag.id);
if(importantBag=={}){
  console.log('lool');
}else{
  console.log('oK');
  console.log(importantBag.id);
  console.log('empty');
}
// console.log(importantBag);
// console.log(importantBag.id);
// console.log(importantBag.site);
const id=['a000','a001','a002','a003','a004','a005','a777','git','nasoberu'];
// importantBag.id=id[0];
// console.log(importantBag.id);
for(let j=0;j<=id.length;j++){
}//for
  const myURL = new URL({
    toString: ()=>`https://lol.ru`,
  });
  for(let y=0;y<=registerUrl.length;y++){

  }
  // https://example.org/
  // console.log(registerUrl[3]);
  // console.log(url.host);
  // importantBag.oK=id[j];
// console.log(JSON.stringify(importantBag.site));
// console.log(importantBag.site);
// console.log(importantBag.site);
function finalFantasy(){
  if(request.body.idea.id=="nasoberu"){
    importantBag.id=request.body.idea.id;
    console.log(request.body.idea);
  }else if(request.body.idea.id=="a003"){
    console.log(request.body.idea);
    importantBag.id=request.body.idea.id;
  }else{
    console.log("LOL");
  }
}

  //SCRIPT JS
  app.post('/comments/script/allow-cors',jsonParser,cors(),(request,response)=>{
    if (!request.body) return response.sendStatus(400);
    let scriptComments=fs.readFileSync('public/script/script.js',"utf8",
    (error,data)=>{
      console.log("Async read file script.ts");
      if(error) throw error;
      console.log(data);
    });
    response.send(scriptComments);
  });// SCRIPT JS
  app.post('/comments/'+`${id[3]}`+'.json/post', jsonParser,cors(), function (request, response) {
    // fs.writeFileSync('public/json/lotl.json', `123`);
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
//##############################################################################
//##############################################################################
//##############################################################################
// finalFantasy();
importantBag.id=`${id[3]}`;

//##############################################################################
      let gitJson=JSON.stringify(request.body)+'';
      const putGit='public/json/'+`${importantBag.id}`+'.json';//puth for JSON
      fs.stat(`${putGit}`,(err,stats)=>{
        if(err){
          console.log('fine non');
          fs.writeFileSync(`${putGit}`,'['+`${gitJson}`+']');
        }else if(stats){
          console.log('file EST');
          function returnForever(){
              let newFile=fs.readFileSync(`${putGit}`,"utf8",
                function(error,data){
                    console.log("Асинхронное чтение файла");
                    if(error) throw error; // если возникла ошибка
                    console.log(data);  // выводим считанные данные
                  });
                  let un=+0;
                  let prov=JSON.stringify(newFile);
                  if(prov.endsWith(']"')){
                    console.log(prov+'====================================');
                    un=-1;
                  }else if(prov.endsWith('\n')){
                    console.log("------/n--------");
                    un=-2;
                  }else{
                    console.log(prov+'*********************************');
                    un=-2;
                  }
              let str=newFile.slice(0,un);
              // fs.writeFileSync('public/json/lol.json',str+','+ `${putGit}`+`${gitJson}`+']','utf8');
              fs.writeFileSync(`${putGit}`, str+","+`${gitJson}`+']','utf8');
          }//returnForever
          returnForever();
          // setTimeout(()=>{
          //   // let newOk=
          // },0);
        }else{
          console.log('ELSE')
        }
      });
  response.json(request.body); // отправляем пришедший ответ обратно
});//FOR and final
app.post('/comments/json/'+`${id[3]}`+'.json/allow-cors',jsonParser,cors(),(request,response)=>{
  // console.log(request.url); // это урд айди джейсон
  if (!request.body) return response.sendStatus(400);
  console.log('JSON');
  console.log(request.body.id+'0000');
  console.log(request.body.site.href+'0000');
  // finalFantasy();
  importantBag.id=`${id[3]}`;
  // if(request.body.id=="a003"){
  //   importantBag.id=request.body.id;
  // }else if(request.body.id=="nasoberu"){
  //   importantBag.id=request.body.id;
  // }
  fs.stat('public/json/'+`${importantBag.id}`+'.json',(err,stats)=>{
    if(err){
      fs.writeFile('/public/json/'+`${importantBag.id}`+'.json', '[{"userName":"messages"},{"Message","hero"}]', function(err){
        if (err) {
          console.log(err);
        } else {
          console.log("Файл создан");
        }
      });
      console.log(err);
    }else{
      // console.log(stats); // ЭТО ВЫВОДИТСЯ В КОНСОЛЕ КАЖДУЮ СЕКУНДУ ИЛИ ПАРУ СЕКУНД
      return ;
    }
  });
  let script=fs.readFileSync('public/json/'+`${importantBag.id}`+'.json',"utf8", //wonderful /
  (error,data)=>{
    console.log("Async read file script.ts");
    if(error) throw error;
    // console.log(data);
  });
  response.send(script);
});//.json/allow-corse


app.post('/comments/json/'+`${id[8]}`+'.json/allow-cors',jsonParser,cors(),(request,response)=>{
  // console.log(request.url); // это урд айди джейсон
  if (!request.body) return response.sendStatus(400);
  console.log('JSON');
  console.log(request.body.id+'0000');
  console.log(request.body.site.href+'0000');
  // finalFantasy();
  importantBag.id=id[8];
  // if(request.body.id=="a003"){
  //   importantBag.id=request.body.id;
  // }else if(request.body.id=="nasoberu"){
  //   importantBag.id=request.body.id;
  // }
  fs.stat('public/json/'+`${importantBag.id}`+'.json',(err,stats)=>{
    if(err){
      fs.writeFile('/public/json/'+`${importantBag.id}`+'.json', '[{"userName":"messages"},{"Message","hero"}]', function(err){
        if (err) {
          console.log(err);
        } else {
          console.log("Файл создан");
        }
      });
      console.log(err);
    }else{
      // console.log(stats); // ЭТО ВЫВОДИТСЯ В КОНСОЛЕ КАЖДУЮ СЕКУНДУ ИЛИ ПАРУ СЕКУНД
      return ;
    }
  });
  let script=fs.readFileSync('public/json/'+`${importantBag.id}`+'.json',"utf8", //wonderful /
  (error,data)=>{
    console.log("Async read file script.ts");
    if(error) throw error;
    // console.log(data);
  });
  response.send(script);
});//.json/allow-corse


  app.post('/comments/'+`${id[8]}`+'.json/post', jsonParser,cors(), function (request, response) {
    // fs.writeFileSync('public/json/lotl.json', `123`);
    if (!request.body) return response.sendStatus(400);
    console.log(request.body);
//##############################################################################
//##############################################################################
//##############################################################################
// finalFantasy();
importantBag.id=`${id[8]}`;

//##############################################################################
      let gitJson=JSON.stringify(request.body)+'';
      const putGit='public/json/'+`${importantBag.id}`+'.json';//puth for JSON
      fs.stat(`${putGit}`,(err,stats)=>{
        if(err){
          console.log('fine non');
          fs.writeFileSync(`${putGit}`,'['+`${gitJson}`+']');
        }else if(stats){
          console.log('file EST');
          function returnForever(){
              let newFile=fs.readFileSync(`${putGit}`,"utf8",
                function(error,data){
                    console.log("Асинхронное чтение файла");
                    if(error) throw error; // если возникла ошибка
                    console.log(data);  // выводим считанные данные
                  });
                  let un=+0;
                  let prov=JSON.stringify(newFile);
                  if(prov.endsWith(']"')){
                    console.log(prov+'====================================');
                    un=-1;
                  }else if(prov.endsWith('\n')){
                    console.log("------/n--------");
                    un=-2;
                  }else{
                    console.log(prov+'*********************************');
                    un=-2;
                  }
              let str=newFile.slice(0,un);
              // fs.writeFileSync('public/json/lol.json',str+','+ `${putGit}`+`${gitJson}`+']','utf8');
              fs.writeFileSync(`${putGit}`, str+","+`${gitJson}`+']','utf8');
          }//returnForever
          returnForever();
          // setTimeout(()=>{
          //   // let newOk=
          // },0);
        }else{
          console.log('ELSE')
        }
      });
  response.json(request.body); // отправляем пришедший ответ обратно
});//FOR and final


// HOST '/comments/commentson
// app.post('/comments/commentson', jsonParser, function (request, response) {
//   if (!request.body) return response.sendStatus(400);
//   // console.log(request.body);
//   let oki=JSON.stringify(request.body)+'';
//   console.log(__dirname);
//   fs.stat(putChik,(err,stats)=>{
//     if(err){
//       console.log('fine non');
//       fs.writeFileSync(putChik,'['+`${oki}`+']');
//     }else if(stats){
//       console.log('file EST');
//       function returnForever(){
//           let newFile=fs.readFileSync(putChik,"utf8",
//             function(error,data){
//                 console.log("Асинхронное чтение файла");
//                 if(error) throw error; // если возникла ошибка
//                 console.log(data);  // выводим считанные данные
//               });
//               // console.log(newFile);
//               let un=+0;
//               let prov=JSON.stringify(newFile);
//               if(prov.endsWith(']"')){
//                 console.log(prov+'====================================');
//                 un=-1;
//               }else if(prov.endsWith('\n')){
//                 console.log("------/n--------");
//                 un=-2;
//               }else{
//                 console.log(prov+'*********************************');
//                 un=-2;
//               }
//           let str=newFile.slice(0,un);
//           return str;
//       }//returnForever
//       setTimeout(()=>{
//         let newOk=fs.writeFileSync(putChik, returnForever()+","+`${oki}`+']','utf8');
//       },0);
//     }else{
//       console.log('ELSE')
//     }
//   });
//   response.json(request.body); // отправляем пришедший ответ обратно
// });
app.set("view engine", "ejs");
// app.get('/comments', function (request, response) {
//   response.sendFile(__dirname + '/comments.html')
// });
app.use("/comments/index",(request,response)=>{
  response.render('commentsOld',{
    title:"Comments",
     text: "Самописная система комментариев. Эта система комментариев без записи в базу данных. Сообщения записываются массивом в документ json форматa. После чего отправляются с сервера обратно в документ. С использованием одного только javascript. Как говорится в пословице: \"все гениальное просто\". Рабочую систему комментариев можно скачать по ссылки с моего гитхаба https://github.com/amir248/comments Вот вам пожалуйста рабочая система комментариев в открытом доступе, это не то что условно бесплатная система комментариев как \"дискус\". Сначало она бесплатная, а потом загромаждает все поля видимости жесточайшими ракламными блоками. Пример работы системы комментариев: https://amir248.github.io/localhost/",
    warnings: "На сервере файлы кэшируются, поэтому иногда чтобы увидеть отправленное сообщение надо обновить страницу.",
    description: "Самописная система комментариев, для сайта."
  })
});
app.use("/comments",(request,response)=>{
  response.render("indexPage",{
    title:"Comments",
    text: "Самописная система комментариев. Эта система комментариев без записи в базу данных. Сообщения записываются массивом в документ json форматa. После чего отправляются с сервера обратно в документ. С использованием одного только javascript. Как говорится в пословице: \"все гениальное просто\". Рабочую систему комментариев можно скачать по ссылки с моего гитхаба https://github.com/amir248/comments Вот вам пожалуйста рабочая система комментариев в открытом доступе, это не то что условно бесплатная система комментариев как \"дискус\". Сначало она бесплатная, а потом загромаждает все поля видимости жесточайшими ракламными блоками. Пример работы системы комментариев: https://amir248.github.io/localhost/ ^_^",
    warnings: "На сервере файлы кэшируются, поэтому иногда чтобы увидеть отправленное сообщение надо обновить страницу.",
    description: "Самописная система комментариев, для сайта."
  });
});

app.listen(port, host,()=> {
  console.log(
    'Сервер начал прослушивание запросов на порту '+ `${port}`
  )
});
