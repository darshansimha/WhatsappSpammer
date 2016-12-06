//Get the input field to insert the text
ourInputElement = document.getElementsByClassName("input")[1];
counter = 1;

//Bind the event to our input element
function bindTheEvent(target, eventType, char) {
   var myEvent = document.createEvent("TextEvent");    
   myEvent.initTextEvent (eventType, true, true, window, char, 0, "en-US");
   target.focus();
   target.bindTheEventEvent(myEvent);
}

//Main function
function spam(spamText){
  if (counter<100){
    bindTheEvent(ourInputElement, "textInput", spamText);
    var input = document.getElementsByClassName("icon btn-icon icon-send");
    input[0].click();// Clicks the send button
    counter++;
    setTimeout(spam,1);
  }
  else { 
    bindTheEvent(ourInputElement, "textInput", spamText);
    var input = document.getElementsByClassName("icon btn-icon icon-send");
    input[0].click();
  }
}

//Call the main method
var spamTextToSend = "It's not magic, it is talent and sweat"; //Enter your text here
spam(spamTextToSend);
