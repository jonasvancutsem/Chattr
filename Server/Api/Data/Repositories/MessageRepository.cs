using Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Data.Repositories
{
    public class MessageRepository: IMessageRepository
    {
        private readonly FriendContext _mcontext;

        private readonly DbSet<Message> _messages;

        public MessageRepository(FriendContext dbContext)
        {
            _mcontext = dbContext;
            _messages = dbContext.Messages;
        }

        public void Add(Message message)
        {
            _messages.Add(message);
        }
        public void Delete(Message message)
        {
            _messages.Remove(message);
        }

        public IEnumerable<Message> GetAll()
        {
            return _messages.ToList();
            return _messages;
        }

        public Message GetBy(int id)
        {
            return _messages.SingleOrDefault(f => f.Id == id);
        }

        public IEnumerable<Message> GetBy(string text, DateTime date, string sender)
        {
            var messages = _messages.AsQueryable();

            return messages.OrderBy(r => r.Text).ToList();
        }

        public void SaveChanges()
        {
            _mcontext.SaveChanges(); ;
        }

        public void Update(Message message)
        {
            _mcontext.Update(message);
        }

    }
}
