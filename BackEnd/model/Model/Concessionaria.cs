using System;
using System.Collections.Generic;

namespace model.Model;

public partial class Concessionaria
{
    public byte Id { get; set; }

    public string Nome { get; set; } = null!;


    public static object getConcessionaria(int id)
    {
        using (var context = new BancoAtividadeContext())
        {
            var concessionaria = context.Concessionarias.Where(i => i.Id == id).FirstOrDefault();
            return concessionaria;
        }
    }
}
