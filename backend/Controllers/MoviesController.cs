using backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private MoviesDbContext _db;

        public MoviesController(MoviesDbContext temp)
        {
            _db = temp;
        }

        public IEnumerable<Movie> Get()
        {
            return _db.Movies.Where(m => m.Edited != "" && m.Edited != null).OrderBy(m => m.Title).ToArray();
        }
    }
}
