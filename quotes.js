$(document).ready(function(){
  
  var randomQuote; 
  
  var authorSelect;
  
  var randomNum;
  
  getQuote();
  
  function getQuote(){
    
    var quotes = ["Life is 10% what happens to you and 90% how you react to it.", "You can do anything, but not everything.", "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", "The richest man is not he who has the most, but he who needs the least.", "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.", "You must be the change you wish to see in the world.", "To the man who only has a hammer, everything he encounters begins to look like a nail.", "We are what we repeatedly do, excellence, then, is not an act but a habit.", "A wise man gets more use from his enemies than a fool from his friends.", "Don't stay in bed, unless you can make money in bed.", " If you want to lift yourself up, lift up someone else."];
    
    var author = ["—Charles R. Swindoll", "—David Allen", "—Antoine de Saint-Exupéry", "—Unknown Author", "—Ambrose Redmoon", "—Gandhi", "—Abraham Maslow", "—Aristotle", "—Baltasar Gracian", "—George Burns", "—Booker T. Washington"];
    
     randomNum = Math.floor(Math.random() * quotes.length);
    
     randomQuote = quotes[randomNum];
    
     authorSelect = author[randomNum];
    
    $(".quotes").text(randomQuote);
    
    $(".author").text(authorSelect);
    
  }
  
  var colors = ['red', 'blue', 'green', 'grey', 'black'],
    color;
  
  $("#newQuote").on("click", function(){
    
    getQuote();
    
    var randColor;
    do {
      randColor = colors[Math.floor(Math.random() * colors.length)];
    } while (color == randColor);
    $('body').css('background-color', randColor);
    $('.btn').css('color', randColor);
    color = randColor;
    
  });
  
  $("#tweet").on("click", function(){
    
    window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " " + authorSelect + " " + "%23quotes" );
    
  });
  
});
