using Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Data.Repositories
{
    public class FriendRepository : IFriendRepository
    {
        private readonly FriendContext _context;

        private readonly DbSet<Friend> _friends;

        public FriendRepository(FriendContext dbContext)
        {
            _context = dbContext;
            _friends = dbContext.Friends;
        }

        public void Add(Friend friend)
        {
            _friends.Add(friend);
        }
         public void Delete(Friend friend)
        {
            _friends.Remove(friend);
        }

        public IEnumerable<Friend> GetAll()
        {
            return _friends.ToList();
            return _friends;
        }

        public Friend GetBy(int id)
        {
            return _friends.SingleOrDefault(f => f.Id == id);
        }

        public IEnumerable<Friend> GetBy(string name, string email , int age)
        {
            var friends = _friends.AsQueryable();
            return friends.OrderBy(r => r.Name).ToList();
        }

        public void SaveChanges()
        {
            _context.SaveChanges(); ;
        }

        public void Update(Friend friend)
        {
            _context.Update(friend);
        }
    }
}
