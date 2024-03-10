let user;
let score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0,
  w:false,
  l:false,
  t:false
};

function computermove(user){
  let comp;
  let snum=Math.random();
  if(snum<=0.33){
    comp='Rock';
  } else if(snum<=0.66 && snum>=0.33){
    comp='Paper';
  }else{
    comp='Scissors';
  }
  if(user==comp){
    score.ties++;
    score.t=true;
    
  }else if((user=='Rock' && comp=='Scissors') || (user=='Paper' && comp=='Rock') || (user=='Scissors' && comp=='Paper')){
    score.wins++;
    score.w=true;
    
  } else{
    score.losses++;
    score.l=true;
  }

  localStorage.setItem('score', JSON.stringify(score));


  document.querySelector('.js-score')
    .innerHTML=`WINS: ${score.wins}, LOSSES: ${score.losses}, TIES: ${score.ties}`

    if (score.t === true) {
      document.querySelector('.winstatus').innerHTML = "It's a TIE."
      score.t = false; // Reset the flag to false
    } else if (score.w === true) {
      document.querySelector('.winstatus').innerHTML = "You WIN."
      score.w = false; // Reset the flag to false
    } else if (score.l === true) {
      document.querySelector('.winstatus').innerHTML = "You LOSE."
      score.l = false; // Reset the flag to false
    }


  if(score.t===true){
    document.querySelector('.winstatus')
      .innerHTML="It's a TIE."
  }else if(score.w===true){
    document.querySelector('.winstatus')
      .innerHTML="You WIN."
  }else if(score.l===true){
    document.querySelector('.winstatus')
      .innerHTML="You LOSE."
  }

  document.querySelector('.moves').innerHTML 
    = `You
    <img class="icons" src="${user}-emoji.png">
    <img class="icons" src="${comp}-emoji.png">
    Computer`

}

function reset(){
  score.wins=0;
  score.losses=0;
  score.ties=0;
  localStorage.removeItem('score');
  document.querySelector('.js-score')
    .innerHTML=`WINS: ${score.wins}, LOSSES: ${score.losses}, TIES: ${score.ties}`
  document.querySelector('.winstatus')
    .innerHTML=' '
}