using Api.Data;
using Microsoft.EntityFrameworkCore;
using Api.Models;
using System.Linq;

namespace Api
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly FriendContext _context;
        private readonly DbSet<Customer> _customers;

        public CustomerRepository(FriendContext dbContext)
        {
            _context = dbContext;
            _customers = dbContext.Customers;
        }

        //public Customer GetBy(string email)
        //{
        //    return _customers.Include(c => c.Friends).ThenInclude(f => f.friend).SingleOrDefault(c => c.Email == email);
        //}

        public Customer GetBy(string email)
        {
            return _customers.SingleOrDefault(c => c.Email == email);
        }

        public void Add(Customer customer)
        {
            _customers.Add(customer);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}