using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Friend
    {
        public int Id { get; private set; }

        public string Name { get;  set; }

        public string Email { get; set; }

        public int Age { get;  set; }

        
        public Friend()
        {


        }

        public Friend(string name,string email, int age) : this()
        {
            if (string.IsNullOrEmpty(name))
            {
                throw new ArgumentException($"'{nameof(name)}' cannot be null or empty", nameof(name));
            }

            if (string.IsNullOrEmpty(email))
            {
                throw new ArgumentException($"'{nameof(email)}' cannot be null or empty", nameof(email));
            }

            if (age == 0)
            {
                throw new ArgumentException($"'{nameof(age)}' cannot be null or empty", nameof(age));
            }

            Name = name;
            Email = email;
            Age = age;
        }

    }
}
