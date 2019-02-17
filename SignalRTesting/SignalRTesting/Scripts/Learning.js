
//immediately invoked function expression
(function()
{
    $.connection.hub.start()//make connection
.done(function () {
    console.log("Yay...it works!");


    $.connection.firstHub.server.learning("connected!");//choosing server to connect to
})//if connection succeeds
.fail(function () { alert("You fucked up!"); })//if connection fails

    $.connection.firstHub.client.learning = function (message) {//assigning clients.learning to the above func
        $("#msg").append("connected! <br />");//why cant i just passa message and not a string????

    }
})()
