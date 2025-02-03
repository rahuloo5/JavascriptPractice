const asyncSeriesExecuter = async function(promises) {
  for (let promise of promises) {
    try{
      const result = await promise;
      console.log(result);
    }catch(e){
      console.log(e);
    }
  }
}



Input:
const asyncTask = function(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100*i)
  });
}

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

asyncSeriesExecuter(promises);

Output:
"Completing 3"
"Completing 1"
"Completing 7"
"Completing 2"
"Completing 5"
