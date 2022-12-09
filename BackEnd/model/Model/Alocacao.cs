using System;
using System.Collections.Generic;
using System.Linq;


using System.Collections.Generic;

using System.Threading.Tasks;

using System.Security.Claims;
using System.Text;

namespace model.Model;

public partial class Alocacao
{
    public byte Id { get; set; }

    public byte Area { get; set; }

    public byte Automovel { get; set; }

    public byte ConcessionRia { get; set; }

    public byte Quantidade { get; set; }



    public static List<Alocacao> getAreas(int id)
    {
        using (var context = new BancoAtividadeContext())
        {
            var areas = context.Alocacaos.Where(i => i.Area == id).ToList();
            return areas;
        }
    }
    public static List<Alocacao> getAll()
    {
        using (var context = new BancoAtividadeContext())
        {
            var areas = context.Alocacaos.ToList();
            return areas;
        }
    }

    public static string venda(int idLocacao)
    {
        using (var context = new BancoAtividadeContext())
        { 
                Alocacao alocacao = context.Alocacaos.FirstOrDefault(a => a.Id == idLocacao);
                alocacao.Quantidade -= 1;
                context.SaveChanges();
                return "vendido";
        }

    }

}
