function loop(times, callback) {
  let times = times || 0;

  let i = 0;

  while(i++ < times) {
    callback();
  }
}

let func1 = () => console.log("Привет");

loop(5, func1);