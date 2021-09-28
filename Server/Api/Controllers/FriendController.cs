using Api.DTOs;
using Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiConventionType(typeof(DefaultApiConventions))]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class FriendController : ControllerBase
    {
        private readonly IFriendRepository _friendRepository;
        private readonly ICustomerRepository _customerRepository;
        public FriendController(IFriendRepository context, ICustomerRepository customerRepository)
        {
            _friendRepository = context;
            _customerRepository = customerRepository;
        }

        // GET: api/Friend
        /// <summary>
        /// Get all friends/users ordered by name
        /// </summary>
        /// <returns>array of friends/users</returns>
        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<Friend> GetFriends(string name, string email,int age)
        {
            return _friendRepository.GetBy(name,email, age);
        }

        ///// <summary>
        ///// Get favorite recipes of current user
        ///// </summary>
        //[HttpGet("CustomerFriends")]
        //public IEnumerable<Friend> GetCustomerFriends()
        //{
        //    Customer customer = _customerRepository.GetBy(User.Identity.Name);
        //    return (IEnumerable<Friend>)customer.Friends;
        //}


        // GET: api/Friend
        /// <summary>
        /// Get the friend/user with given id[HttpGet("Favourites")]public IEnumerable<Recipe> GetFavourites(){Customer customer= _customerRepository.GetBy(User.Identity.Name);return customer.FavoriteRecipes;}
        /// </summary>
        /// <param name="id">the id of the friend/user</param>
        /// <returns>The friend/user</returns>
        // GET: api/Friend
        [HttpGet("{id}")]
        public ActionResult<Friend> GetFriend(int id)
        {
            Friend friend = _friendRepository.GetBy(id);
            if (friend == null) return NotFound(); 
            return friend;
        }

        // POST: api/Friend
        /// <summary>
        /// Adds a new friend/user
        /// </summary>
        /// <param name="friend">the new friend/user</param>
        [HttpPost]
        public ActionResult<Friend> PostFriend(FriendDTO friend)
        {
            Friend friendToCreate = new Friend() { Name = friend.Name, Email = friend.Email ,Age = friend.Age };

            _friendRepository.Add(friendToCreate);
            _friendRepository.SaveChanges();

            return CreatedAtAction(nameof(GetFriend), new { id = friendToCreate.Id }, friendToCreate);
        }

        // PUT: api/Friends/5
        /// <summary>
        /// Modifies a friend/user
        /// </summary>
        /// <param name="id">id of the friend/user to be modified</param>
        /// <param name="friend">the modified friend</param>
        [HttpPut("{id}")]
        public IActionResult PutFriend(int id, Friend friend)
        {
            if (id != friend.Id)
            {
                return BadRequest();
            }
            _friendRepository.Update(friend);
            _friendRepository.SaveChanges();
            return NoContent();
        }

        // DELETE: api/Friends/5
        /// <summary>
        /// Deletes a friend/user
        /// </summary>
        /// <param name="id">the id of the friend/user to be deleted</param>
        [HttpDelete("{id}")]
        public IActionResult DeleteFriend(int id)
        {
            Friend friend = _friendRepository.GetBy(id);
            if (friend == null)
            {
                return NotFound();
            }
            _friendRepository.Delete(friend);
            _friendRepository.SaveChanges();
            return NoContent();
        }

        
    }
}
