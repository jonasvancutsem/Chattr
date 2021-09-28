using Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Data.Mapping
{
    public class FriendConfiguration : IEntityTypeConfiguration<Friend>
    {
        public void Configure(EntityTypeBuilder<Friend> builder)
        {
            builder.ToTable("Friend");
            builder.HasKey(f => f.Id);

            builder.Property(f => f.Name).IsRequired();
            builder.Property(f => f.Email).IsRequired();

            builder.Property(f => f.Age).IsRequired();
        }
    }
}
