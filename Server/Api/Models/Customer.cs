using Api.Models;
using System.Collections.Generic;
using System.Linq;

namespace Api
{
    public class Customer
    {
        #region Properties
        //add extra properties if needed
        public int CustomerId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        //public IEnumerable<CustomerFriends> CFriends { get; private set; }

        
        #endregion
         
        #region Constructors

        public Customer()
        {

        }

        public Customer(string firstName, string lastName, string email) : this()
        {
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            //CFriends = cfriends;
        }

       
        #endregion

        #region Methods
        //public void AddCustomerFriend(Friend friend)
        //{
        //    CFriends.Add(new CustomerFriends() { FriendId = friend.Id, CustomerId = CustomerId, friend = friend, Customer = this });
        //}
        #endregion
    }
}