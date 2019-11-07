// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Number Guessing Chatbot
// Edited Video: https://www.youtube.com/watch?v=zGe1m_bLOFk

meSpeak.loadVoice('../../lib/mespeak-voices/ca.json'); // load catalan espeak voice

var myRec = new p5.SpeechRec('es-ES'); // new P5.SpeechRec object
	myRec.continuous = true; // do continuous recognition
	myRec.interimResults = true; // allow partial recognition (faster, less accurate)

var bot, botreply;

function setup() {
  // graphics stuff:
		createCanvas(600, 400);
		background(255, 255, 255);
		fill(0, 0, 0, 255);

  bot = new RiveScript();
  bot.loadFile("brain.rive").then(brainReady).catch(brainError); 

  function brainReady() {
    console.log('Chatbot ready!');
    bot.sortReplies();
    let num = floor(random(10)) + 1;
    console.log(num);
    bot.reply('local-user', 'set ' + num);
  }

  function brainError() {
    console.log('Chatbot error!')
  }

  textSize(32);
	textAlign(CENTER);
	text("pick a number", width/2, height/2);
	myRec.onResult = parseResult;
	myRec.start();
}

function chat(input) {
    bot.reply("local-user", input).then(function(reply) {
      text(reply, width/2, height/2); 
      botreply = reply
    });

  }

function parseResult()
	{
		// recognition system will often append words into phrases.
		// so hack here is to only use the last word:
		var mostrecentword = myRec.resultString.split(' ').pop();

		console.log(mostrecentword);

    background(192, 255, 192);
    
    setTimeout(chat(mostrecentword), 1500); 
	}
