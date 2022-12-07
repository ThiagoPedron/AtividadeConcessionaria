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
    public class AlocacaoController : Controller
    {
       public IConfiguration _configuration; //add

        public AlocacaoController(IConfiguration config)
        { //add
            _configuration = config;
        }


        [HttpGet]
        [Route("alocacao/getAll")]
        public List<Alocacao> getAll()
        {
            var all = Alocacao.getAll();
            return all;
        }

        [HttpGet]
        [Route("alocacao/id")]
        public List<Alocacao> GetAlocacao(int id)
        {
            var all = Alocacao.getAreas(id);
            return all;
        }

        // [HttpPost]
        // [Route("alocacao/venda")]
        // public string Venda(int id)
        // {
        //     var all = Alocacao.venda(id);
        //     return all;
        // }
       
    }
}