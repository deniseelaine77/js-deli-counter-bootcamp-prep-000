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

function currentLine(){
  if(line.length === 0) {
    return "The line is currently empty.";
  } 
    
  }
  }
}