using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api.DTOs
{
    public class FriendDTO
    {
        [Required]

        public string Name { get;  set; }

        public string Email { get;  set; }

        public int Age { get;  set; }
    }
}
