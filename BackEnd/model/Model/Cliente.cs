using System;
using System.Collections.Generic;

namespace model.Model;

public partial class Cliente
{
    public byte Id { get; set; }

    public string Nome { get; set; } = null!;


    public static List<Cliente> getAll()
    {
        using (var context = new BancoAtividadeContext())
        {
            var clientes = context.Clientes.ToList();
            return clientes;
        }
    }
}
