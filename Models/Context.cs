using System;
using Microsoft.EntityFrameworkCore;

namespace new_project
{
    public class NewProjectContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }
        
    }
}