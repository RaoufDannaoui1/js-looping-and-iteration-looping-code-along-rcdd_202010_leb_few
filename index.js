// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"];

  writeCards(names);

function writeCards(names)
{
for(let i = 0; i<names.length; i++)
  {
    console.log(`Thank you, ${names[i]}, for the wonderful birthday gift!`);
  }

  return names;
}
