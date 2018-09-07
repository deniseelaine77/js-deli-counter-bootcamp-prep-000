function takeANumber(line, name){
  line.push(name);
  let i= line.length
  return("Welcome, " + name + ". You are number " + i + " in line.")
}

function nowServing(line) {
  if(line.length === 0) {
  return "There is nobody waiting to be served!";
  } else {
    let i = line[0];
    line.shift()
    return "Currently serving " + i + ".";
  }
}

// function johnLennonFacts(array){
//   var excl = [];
//   let i = 0;
//   while (i < array.length) {
//     excl.push(array[i] + "!!!"); i++
//   }
//   return excl
// }

function currentLine(array){
  if(array.length === 0) {
    return "The line is currently empty.";
  } else {
    var list=[];
    var i = 0
    for(i; i<array.length; i++)
    list.push((array.indexOf[i]+1) + ". " + array[i])
  }
  return list
  }
