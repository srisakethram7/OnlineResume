using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ResumeAPI.FileOperations;
using ResumeAPI.Models;
using System.Web.Http.Cors;

namespace ResumeAPI.Controllers
{
    [Route("api/about")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class AboutController : Controller
    {
        // GET api/about
        [HttpGet]
        public IEnumerable<string> Get()
        {
            ContentIO fileInfo = new ContentIO();

            return fileInfo.GetAboutMe();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
