using Api.Models;

namespace Api
{
    public class CustomerFriends
    {
        #region Properties
        public int CustomerId { get; set; }

        public int FriendId { get; set; }

        public Customer Customer { get; set; }

        public Friend friend { get; set; }
        #endregion


        public CustomerFriends()
        {
            
        }
        public CustomerFriends(int friendId, Customer c, Friend f) : this()
        {
            FriendId = friendId;
            Customer = c;
            friend = f;
            
        }
    }
}