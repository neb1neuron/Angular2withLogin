using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FleetPortal.UI.Controllers
{
    [Route("api/[controller]")]
    public class RouteController : Controller
    {
        private static string[] Summaries = {
            "Ion", "Vasile", "Mitica", "Grivei", "Emil", "Aglaia", "Mama Manu", "Hot", "Gabor", "Alin"
        };

        [HttpGet("[action]")]
        public IEnumerable<Route> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Route
            {
                Id = index,
                Date = DateTime.Now.AddDays(index).ToString("d"),
                Truck = rng.Next(100, 1000),
                Driver = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class Route
        {
            public int Id { get; set; }
            public string Driver { get; set; }
            public int Truck { get; set; }
            public string Date { get; set; }
        }
    }
}
