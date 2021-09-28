using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Message
    {
        public int  Id { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; }
        public string Sender { get; set; }

        private readonly UserManager<IdentityUser> _userManager;

        public Message()
        {
            Date = DateTime.Now;
            Sender = "Senddr";

        }

        public Message(string text, DateTime date, string sender) : this()
        {
            if (string.IsNullOrEmpty(text))
            {
                throw new ArgumentException($"'{nameof(text)}' cannot be null or empty", nameof(text));
            }
           



            Text = text;
            
           
           
        }
    }
}