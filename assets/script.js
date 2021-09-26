// $(document).ready(function () {
var currentDay = $("#currentDay");
let blockTime = $(".time-block");
var currentTime;
clockUpdater();
loadData();

//Set interval to update
var clock = setInterval(clockUpdater, 1000)

//Set current time 
function clockUpdater(){
    currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(currentTime);
    checkTime();
}

function checkTime() {

    currentHour = moment().hour();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id"));

        // To check the time and add the classes for background indicators
        if (blockTime < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

console.log(currentHour)

// //Save button click listener
$(".saveBtn").on("click", saveClick);

//Save input to local storage
function saveClick(event){
    var text = $(event.target).siblings(".description").val();
    var time = $(event.target).parent().attr("id");

    if(text === "")
        alert("Type text into the field to save it on the calendar")
    else{
        localStorage.setItem(time, text);
        alert("This assignment has been saved");
    }
}

//Clear button click listener
$(".clearBtn").on("click", clearClick);

//Save input to local storage
function clearClick(event){
    
    var clear = confirm("Are you sure? No going back after you click that button!");

    if(clear){
        localStorage.clear();
        loadData();
    }
    
}

//Load data from local storage to each time block
function loadData(){ 
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
}





