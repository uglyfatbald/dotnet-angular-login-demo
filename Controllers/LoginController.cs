using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Security.Cryptography;

namespace dotnet_angular_login_demo.Controllers
{
    [Route("api/authenticate")]
    public class LoginController : Controller
    {
        private JsonResult JsonFormat(object objeto)
        {
            return new JsonResult(objeto, new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore });
        }

        [HttpPost()]
        public IActionResult Post([FromBody] LoginInformation input)
        {
            if (input.checkPassword()) {
                return JsonFormat(input);
            } else
            {
                return Unauthorized();
            }
        }

        public class LoginInformation
        {
            public string username { get; set; }
            public string password { get; set; }
            public string token { get; set; }

            public bool checkPassword()
            {
                if (password == "password")
                {
                    token = System.Guid.NewGuid().ToString();
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
    }
}