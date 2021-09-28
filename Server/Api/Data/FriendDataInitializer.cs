using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Api.Data
{
    public class FriendDataInitializer
    {
        private readonly FriendContext _dbContext;
        private readonly UserManager<IdentityUser> _userManager;

        public FriendDataInitializer(FriendContext dbContext, UserManager<IdentityUser> userManager)
        {
            _dbContext = dbContext;
            _userManager = userManager;
        }

        public async Task InitializeData()
        {
            //_dbContext.Database.EnsureDeleted();
            if (_dbContext.Database.EnsureCreated())
            {
                Friend friend1 = new Friend("Jonas", "jonasvancutsem@hotmail.be" ,20);
                _dbContext.Friends.Add(friend1);

                //Customer c1 = new Customer("recipemaster@hogent.be", "Adam", "Master", );
                //_dbContext.Customers.Add(c1);
                //await CreateUser(c1.Email, "P@ssword1111");

                Customer c2 = new Customer("student@hogent.be", "Student", "Hogent" );
                _dbContext.Customers.Add(c2);
                //c2.AddCustomerFriend(_dbContext.Friends.First());
                await CreateUser(c2.Email, "P@ssword1111");

                Message m1 = new Message("Dit is een test message 1@+.", DateTime.Now,"Jonas");
                
                _dbContext.Messages.Add(m1);
               
                _dbContext.SaveChanges();
            }

           
        }

        private async Task CreateUser(string email, string password)
        {
            var user = new IdentityUser { UserName = email, Email = email };
            await _userManager.CreateAsync(user, password);
        }
    }
}

