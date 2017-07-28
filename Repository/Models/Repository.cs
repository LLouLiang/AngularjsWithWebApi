using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Repository.Models
{
	public class Repository:IRepository
	{
		TalkContext db = new TalkContext();
		public void delete(string id)
		{
			var talk = db.Talks.Where(x => x.id == id).FirstOrDefault();
			db.Talks.Remove(talk);
			db.SaveChanges();
		}

		public void insert(Talk t)
		{
			db.Talks.Add(t);
			db.SaveChanges();
		}

		public List<Talk> selectAll()
		{
			return db.Talks.ToList();
		}

		public Talk selectByID(string id)
		{
			var talk = db.Talks.Where(x => x.id == id).FirstOrDefault();
			return talk;
		}

		public void update(Talk t,string id)
		{
			var talk = db.Talks.Where(x => x.id == id).FirstOrDefault();
			talk.id = t.id;
			talk.name = t.name;
			talk.speaker = t.speaker;
			talk.venue = t.venue;
			talk.Duration = t.Duration;
			db.SaveChanges();
		}
	}
}