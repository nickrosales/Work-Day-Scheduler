
//stores the cutrrent date into a variable
var currentDate = dayjs().format('MMMM D, YYYY');
//saves the save buttons to a variable
var saveBtn = document.querySelectorAll('.saveBtn')
// saves the textarea in each timeblock to a variable
var nineBlock = document.querySelector('#h9t');
var tenBlock = document.querySelector('#h10t');
var elevenBlock = document.querySelector('#h11t');
var twelveBlock = document.querySelector('#h12t');
var oneBlock = document.querySelector('#h13t');
var twoBlock = document.querySelector('#h14t');
var threeBlock = document.querySelector('#h15t');
var fourBlock = document.querySelector('#h16t');
var fiveBlock = document.querySelector('#h17t');
//displays the current date in the header
$('#currentDay').text('Today is: ' + currentDate);
//stores the current time wiht hour only on 24 hour clock
var currentTime = dayjs().format('HH');
//loops to add differnt classes to each time block depending on the time
for(i = 9; i < 18; i++) {
  if(currentTime < i) {
    $('#hour-' + i).addClass('future');
  } else if(currentTime > i) {
    $('#hour-' + i).addClass('past');
  } else {
    $('#hour-' + i).addClass('present');
  };
};

//function to save all user input to an object. then send the object to local storage
function saveMsg() {
  var calender = {
    nineBlockMsg: nineBlock.value.trim(),
    tenBlockMsg: tenBlock.value.trim(),
    elevenBlockMsg: elevenBlock.value.trim(),
    twelveBlockMsg: twelveBlock.value.trim(),
    oneBlockMsg: oneBlock.value.trim(),
    twoBlockMsg: twoBlock.value.trim(),
    threeBlockMsg: threeBlock.value.trim(),
    fourBlockMsg: fourBlock.value.trim(),
    fiveBlockMsg: fiveBlock.value.trim()
  };
  localStorage.setItem('calender', JSON.stringify(calender));
};

//loads object from loacal storage into the user input areas
function renderMsg () {
  var lastMsg = JSON.parse(localStorage.getItem('calender'));
  if(lastMsg !== null) {
    nineBlock.innerHTML = lastMsg.nineBlockMsg;
    tenBlock.innerHTML = lastMsg.tenBlockMsg;
    elevenBlock.innerHTML = lastMsg.elevenBlockMsg;
    twelveBlock.innerHTML = lastMsg.twelveBlockMsg;
    oneBlock.innerHTML = lastMsg.oneBlockMsg;
    twoBlock.innerHTML = lastMsg.twoBlockMsg;
    threeBlock.innerHTML = lastMsg.threeBlockMsg;
    fourBlock.innerHTML = lastMsg.fourBlockMsg;
    fiveBlock.innerHTML = lastMsg.fiveBlockMsg;
  } else {
    return;
  };
};
//listens for a click on the save buttons then runs the savemsg and rendermsg funtions
for(var i = 0; i < saveBtn.length; i++ ) {
  saveBtn[i].addEventListener('click', function(event) {
    event.preventDefault();
    saveMsg();
    renderMsg();
  });
}

//runs the renderMsg funtion whgen the page loads
function init() {
  renderMsg();
};
init();