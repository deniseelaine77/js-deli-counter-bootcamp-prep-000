function takeANumber(line, name){
  line.push(name);
  let i= line.length
  return("Welcome, " + name + ". You are number " + i + " in line.")
}

function nowServing(line) {
  if(line.length === 0) {
  return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line[0] + ".";
    line.shift()
  }
}
