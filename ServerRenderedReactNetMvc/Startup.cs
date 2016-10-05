using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ServerRenderedReactNetMvc.Startup))]
namespace ServerRenderedReactNetMvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
