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
  var a;
  while(a < facts.length){
    for(a = 0; a != NULL; a++){
      facts[a] = facts[a] + "!!!";
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
