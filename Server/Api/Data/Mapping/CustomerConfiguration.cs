using Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Data.Mapping
{
    public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder.ToTable("Users");
            builder.HasKey(f => f.CustomerId);

            builder.Property(f => f.FirstName).IsRequired();
            builder.Property(f => f.LastName).IsRequired();
            builder.Property(f => f.Email).IsRequired();
            //builder.Property(f => f.Friends);
        }
    }
}
