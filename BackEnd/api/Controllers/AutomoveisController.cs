using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using model.Model;
namespace api.Controllers
{
    [Route("[controller]")]
    public class AutomoveisController : ControllerBase
    {
        public IConfiguration _configuration; //add

        public AutomoveisController(IConfiguration config)
        { //add
            _configuration = config;
        }


        [HttpGet]
        [Route("automoveis/id")]
        public object getAll(int id)
        {
            var all = Automoveis.getAutomovel(id);
            return all;
        }

    }
}