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
    public class ConcessionariaController : Controller
    {
        
        public IConfiguration _configuration; //add

        public ConcessionariaController(IConfiguration config)
        { //add
            _configuration = config;
        }


        [HttpGet]
        [Route("concessionaria/id")]
        public object getAll(int id)
        {
            var concessionaria = Concessionaria.getConcessionaria(id);
            return concessionaria;
        }
    }
}