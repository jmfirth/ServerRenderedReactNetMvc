using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(ServerRenderedReactNetMvc.ReactConfig), "Configure")]

namespace ServerRenderedReactNetMvc
{
	public static class ReactConfig
	{
		public static void Configure()
		{
            ReactSiteConfiguration.Configuration
                .AddScriptWithoutTransform("~/node_modules/react-bootstrap/dist/react-bootstrap.min.js")
                .AddScript("~/Components/Views/Layout.jsx")
                .AddScript("~/Components/Views/Home.jsx")
                .AddScript("~/Components/Views/About.jsx")
                .AddScript("~/Components/Views/Contact.jsx");
        }
    }
}