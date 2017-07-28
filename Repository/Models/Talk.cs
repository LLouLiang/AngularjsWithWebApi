using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Repository.Models
{
	public class Talk
	{
		public string id { get; set; }
		public string name { get; set; }
		public string speaker { get; set; }
		public string venue { get; set; }
		public string Duration { get; set; }
	}
}