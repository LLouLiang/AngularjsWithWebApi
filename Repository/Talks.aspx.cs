using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Repository.Models;

namespace Repository
{
	public partial class Talks : System.Web.UI.Page
	{
		protected void Page_Load(object sender, EventArgs e)
		{
			Repository.Models.Repository r = new Models.Repository();
			TalkContext db = new TalkContext();
			db.Talks.ToList();
			r.selectAll();
			if (db.Talks != null)
			{
				lblname.Text = "dsad";
			}
			else
			{
				lblname.Text = "nononono";
			}
			
		}
	}
}