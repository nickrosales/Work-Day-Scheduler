

var currentDate = dayjs().format('MMMM D, YYYY');
var saveBtn = document.querySelector('.saveBtn')
var nineBlock = document.querySelector('#h9t');
var tenBlock = document.querySelector('#h10t');
var elevenBlock = document.querySelector('#h11t');
var twelveBlock = document.querySelector('#h12t');
var oneBlock = document.querySelector('#h13t');
var twoBlock = document.querySelector('#h14t');
var threeBlock = document.querySelector('#h15t');
var fourBlock = document.querySelector('#h16t');
var fiveBlock = document.querySelector('#h17t');

$('#currentDay').text('Today is: ' + currentDate);

var currentTime = dayjs().format('HH');
for(i = 9; i < 18; i++) {
  if(currentTime < i) {
    $('#hour-' + i).addClass('future');
  } else if(currentTime > i) {
    $('#hour-' + i).addClass('past');
  } else {
    $('#hour-' + i).addClass('present');
  };
};

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

saveBtn.addEventListener('click', function(event) {
  event.preventDefault();
  saveMsg();
  renderMsg();
});

function init() {
  renderMsg();
};

init();
