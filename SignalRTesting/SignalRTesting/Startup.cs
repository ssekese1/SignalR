using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SignalRTesting.Startup))]
namespace SignalRTesting
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            ConfigureAuth(app);
        }
    }
}
