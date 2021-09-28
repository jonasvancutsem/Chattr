using Api.DTOs;
using Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [ApiConventionType(typeof(DefaultApiConventions))]
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IMessageRepository _messageRepository;
        public MessageController(IMessageRepository context)
        {
            _messageRepository = context;
        }

        // GET: api/Message
        /// <summary>
        /// Get all messages
        /// </summary>
        /// <returns>array of messages</returns>
        [HttpGet]
        public IEnumerable<Message> GetMessages(string text, DateTime date,string sender)
        {

            return _messageRepository.GetBy(text, date, sender).OrderByDescending(e => e.Id) ;
        }


        // GET: api/Message
        /// <summary>
        /// Get the message with given id
        /// </summary>
        /// <param name="id">the id of the message</param>
        /// <returns>The message</returns>
        [HttpGet("{id}")]
        public ActionResult<Message> GetMessage(int id)
        {
            Message message = _messageRepository.GetBy(id);
            if (message == null) return NotFound();
            return message;
        }


        // POST: api/Message
        /// <summary>
        /// Adds a new message
        /// </summary>
        /// <param name="message">the new message</param>
        [HttpPost]
        public ActionResult<Message> PostMessage(MessageDTO message)
        {
            Message messageToCreate = new Message() { Text = message.Text};
            _messageRepository.Add(messageToCreate);
            _messageRepository.SaveChanges();

            return CreatedAtAction(nameof(GetMessage), new { id = messageToCreate.Id }, messageToCreate);
        }

        // PUT: api/Message/5
        /// <summary>
        /// Modifies a message
        /// </summary>
        /// <param name="id">id of the message to be modified</param>
        /// <param name="message">the modified message</param>
        [HttpPut("{id}")]
        public IActionResult PutMessage(int id, Message message)
        {
            if (id != message.Id)
            {
                return BadRequest();
            }
            _messageRepository.Update(message);
            _messageRepository.SaveChanges();
            return NoContent();
        }

        // DELETE: api/Message/5
        /// <summary>
        /// Deletes a message
        /// </summary>
        /// <param name="id">the id of the message to be deleted</param>
        [HttpDelete("{id}")]
        public IActionResult DeleteMessage(int id)
        {
            Message message = _messageRepository.GetBy(id);
            if (message == null)
            {
                return NotFound();
            }
            _messageRepository.Delete(message);
            _messageRepository.SaveChanges();
            return NoContent();
        }
    }
}
