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
    public class ClienteController : Controller
    {
        public IConfiguration _configuration; //add

        public ClienteController(IConfiguration config)
        { //add
            _configuration = config;
        }
        [HttpGet]
        [Route("getAll")]
        public List<Cliente> getAll()
        {
            var clientes = model.Model.Cliente.getAll();
            return clientes;
        }
        [HttpGet]
        [Route("teste")]
        public string teste(){
            return "foi";
        }

    }
}