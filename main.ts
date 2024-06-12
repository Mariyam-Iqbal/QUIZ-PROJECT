#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellowBright.bold.italic('\t **Welcome in Typescript Quiz**'));


console.log(chalk.redBright.bold.italic('\n \t Each Question is of 10 marks'));



console.log(chalk.blueBright.bold.italic('\n \t lets Start with Mariyam Iqbal first quiz'));




let SCORE: number = 0;

let Input = await inquirer.prompt(
    [
{
    name:"Question1",
    type:"list",
    message:chalk.green("Q:1.What will be the output of following typeSceipt code? \n \t let myName:string = 'Mariyam'; \n \t myName = 'Sana'; \n \t console.log(myName)"),
    choices:["1.Mariyam","2.mariyam", "3.Sana"]
},
{
    name:"Question2",
    type:"list",
    message:chalk.green("Q:2.Which types is primitive type in javaScript?"),
    choices:["1.object", "2.string" ,"function"] 
},
{
    name:"Question3",
    type:"list",
    message:chalk.green("Q:3.Which method is used to search an element of an array?"),
    choices:["1.length()","2.unshift()","3.indexof()" ]
},
{
    name:"Question4",
    type:"list",
    message:chalk.green("Q:4.Which command is used to install inquirer?"),
    choices:["1.tsc i inquirer","2.npm i inquirer","3.install inquirer" ]
},
{
    name:"Question5",
    type:"list",
    message:chalk.green("Q:5.The collection of key value is called?"),
    choices:['1.array','2.object','3.function','4.tupple' ]
}
]);
const {Question1, Question2, Question3, Question4, Question5} = Input;

let rightAns = ["3.Sana","2.string","3.indexof","2.npm i inquirer","2.object"];
if(Question1 === "3.Sana") SCORE += 10;
if(Question2 === "2.string")SCORE += 10;
if(Question3 === "3.indexof()") SCORE += 10;
if(Question4 === "2.npm i inquirer")SCORE += 10;
if(Question5 === '2.object') SCORE += 10;
 console.log(SCORE);
 function myAns() {
    console.log(`\n Right Answers =  \t`, rightAns);
    
    if(SCORE === 50){
        console.log(`\n Congratulations You got ${SCORE} out of 50.`);
  }else if(SCORE === 40 ) {
    console.log(`\n You Got ${SCORE} number Out of 50.`);
    
  }else if(SCORE === 30){
   console.log(`\n Need Improved you got ${SCORE} number out of 50`);
    
  }
  else{
    console.log(`\n BAD LUCK!!! You just ${SCORE} number out of 50`);
    
  }
 }
 myAns();