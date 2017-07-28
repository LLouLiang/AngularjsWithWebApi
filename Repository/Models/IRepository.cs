using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Models
{
	interface IRepository
	{
		Talk selectByID(string id);
		void insert(Talk t);
		void update(Talk t,string id);
		void delete(string id);
		List<Talk> selectAll();
	}
}
