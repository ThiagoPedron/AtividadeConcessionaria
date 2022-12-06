using System;
using System.Collections.Generic;

namespace model.Model;

public partial class Automoveis
{
    public byte Id { get; set; }

    public string Modelo { get; set; } = null!;

    public decimal PreO { get; set; }

    public static object getAutomovel(int id)
    {
        using (var context = new BancoAtividadeContext())
        {
            var automoveis = context.Automoveis.Where(i => i.Id == id).FirstOrDefault();
            return automoveis;
        }
    }


}


