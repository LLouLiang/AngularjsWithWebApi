using Repository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace webAPI.Controllers
{
    public class TalkController : ApiController
    {
		Repository.Models.Repository r = new Repository.Models.Repository();
		// GET: api/Talk
		public List<Talk> Get()
		{
			return r.selectAll();
		}

		// GET: api/Talk/5
		public Talk Get(string id)
		{
			return r.selectByID(id);
		}

		// POST: api/Talk
		public void Post([FromBody]Talk t)
		{
			r.insert(t);
		}

		// PUT: api/Talk/5
		public void Put(string id,[FromBody]Talk t)
		{
			r.update(t,id);
		}

		// DELETE: api/Talk/5
		public void Delete(string id)
		{
			r.delete(id);
		}
	}
}
