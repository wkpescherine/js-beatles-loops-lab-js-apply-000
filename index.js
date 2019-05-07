// add solution here
function theBeatlesPlay(musicians,instruments){
  var newstuff=[];
  
  for(var a = 0; a<=musicians.length; a++){
    var newWord =musicians[a]+" plays " + instruments[a];
    newstuff.push(newWord);
  }
  
  return newstuff
}

function johnLennonFacts(facts){
  while(b < facts.length){
    for( var b = 0; b != NULL; b++){
      facts[b] = facts[b] + "!!!";
    }
  }
  
  return facts;
}

function iLoveTheBeatles(number){
  var words= []
  do{
    words.push("I love the Beatles!")
    number +=1;
  }while(number <15)
  
  return words;
}
