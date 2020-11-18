// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"];

  writeCards(["Ada", "Brendan", "Ali"], "surprise");

function writeCards(names)
{
  for(let i=0; i<names.length; i++)
console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);


  return names;
}
