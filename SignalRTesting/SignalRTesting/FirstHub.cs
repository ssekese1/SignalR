using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace SignalRTesting
{
    public class FirstHub : Hub
    {

        public void learning(string message)//a method accessible to other classes and doesnot return anything
        {
            Clients.All.learning();//telling clients what to do

        }
    }
}