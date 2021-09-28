using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public interface IMessageRepository
    {
        Message GetBy(int id);
        IEnumerable<Message> GetAll();
        IEnumerable<Message> GetBy(string text, DateTime date, string Sender);
        void Add(Message message);
        void Delete(Message message);
        void Update(Message message);
        void SaveChanges();
    }
}
