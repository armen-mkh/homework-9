const fs = require("fs");
const axios = require("axios");
const inquirer = require ("inquirer");


const questions = [
"Username: ",
"Project Titile: ",
"Description: ",
"Table of Contents: ",
"Installation: ",
"Usage: ",
"License: ",
"Contributing: ",
"Tests: ",
"Questions: "
];

function writeToFile(fileName, data) {

}

function init() {

  inquirer.prompt([
    {
    message: questions[0],
    name: "username"
    },
    {
      message: questions[1],
      name: "title"
    },
    {
      message: questions[2],
      name: "description"
    },
    {
      message: questions[3],
      name: "TableOfContents"
    },
    {
      message: questions[4],
      name: "Installation"
    },
    {
      message: questions[5],
      name: "Usage"
    },
    {
      message: questions[6],
      name: "License"
    },
    {
      message: questions[7],
      name: "Contributing"
    },
    {
      message: questions[8],
      name: "Tests"
    },
    {
      message: questions[9],
      name: "questions"
    }
  ])
  .then(function (response) {
    console.log(response);
    var avatar;
    var eMail;

    const queryURL = `https://api.github.com/users/${response.username}`
    axios.get(queryURL).then(function (res) {

     avatar = res.data.avatar_url;
     eMail = res.data.email;


    console.log(avatar, eMail);

     const data = {
       Picture: avatar,
       GitEmail: eMail,
       Username: response.username,
       Title: response.title,
       Description: response.description,
       TableOfContents: response.TableOfContents,
       Installation: response.Installation,
       Usage: response.Usage,
       License: response.License,
       Contributing: response.Contributing,
       Tests: response.Tests,
       Questions: response.questions
     }
     console.log(data);
     let dataJSON = JSON.stringify(data, null, 2);
     fs.writeFile(`${data.Username}.md`, dataJSON, function (err) {
       if(err){
          throw err;
       }
       else{
         return console.log("Success!")
       }
     })

    })



  });


}

init();
