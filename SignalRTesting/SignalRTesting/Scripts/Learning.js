    //immediately invoked function expression
   ( function()
    {
        var myHub = $.connection.firstHub;
        $.connection.hub.start()//make connection
    .done(function () {//if connection succeeds
        WriteToPage("Yay...it works!");
        myHub.server.learning("connected!");//choosing server to connect to
    })
    .fail(function () { WriteToPage("Error writing to file!"); })//if connection fails

        myHub.client.learning = function (message) {//assigning clients.learning to the above func
            WriteToPage("connected!");
        }
        var WriteToPage = function(message)
        {
            $("#msg").append(message + " <br />");//why cant i just pass a message and not a string????
        }

    })()