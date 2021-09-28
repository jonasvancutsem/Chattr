using Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Data.Mapping
{
    public class MessageConfiguration : IEntityTypeConfiguration<Message>
    {
        public void Configure(EntityTypeBuilder<Message> builder)
        {
            builder.ToTable("Message");
            builder.HasKey(f => f.Id);

            builder.Property(f => f.Text).IsRequired();
            builder.Property(f => f.Date).IsRequired();
            builder.Property(f => f.Sender).IsRequired();
        }

    }
}
