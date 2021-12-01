const args = process.argv.slice(2);

for (const element of args){
let delay = 1000 * Number(element);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay);
  
  };