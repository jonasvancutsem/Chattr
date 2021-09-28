using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public interface IFriendRepository
    {
        Friend GetBy(int id);
        IEnumerable<Friend> GetAll();
        IEnumerable<Friend> GetBy(string name, string email,int age);
        void Add(Friend friend);
        void Delete(Friend friend);
        void Update(Friend friend);
        void SaveChanges();
    }
}
