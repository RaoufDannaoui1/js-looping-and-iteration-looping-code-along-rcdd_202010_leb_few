// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];

  writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function writeCards(names)
{
  for(let i=0; i<names.length; i++)
console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);


  return names;
}
