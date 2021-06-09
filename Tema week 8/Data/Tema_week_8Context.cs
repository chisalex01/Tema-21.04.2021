using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Tema_week_8.Models;

namespace Tema_week_8.Data
{
    public class Tema_week_8Context : DbContext
    {
        public Tema_week_8Context (DbContextOptions<Tema_week_8Context> options)
            : base(options)
        {
        }

        public DbSet<Tema_week_8.Models.Duckbill> Duckbill { get; set; }
    }
}
