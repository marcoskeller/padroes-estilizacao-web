using Microsoft.AspNetCore.Mvc;
using Padroes_Estilizacao_Web.Models;
using System.Diagnostics;

namespace Padroes_Estilizacao_Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult FlexBox()
        {
            return View();
        }

        public IActionResult Transicao()
        {
            return View();
        }

        public IActionResult Box_Shadow_CSS()
        {
            return View();
        }


        public IActionResult BarraProgresso()
        {
            return View();
        }


        public IActionResult BotaoUploadBarraProgresso()
        {
            return View();
        }
        
        public IActionResult Outros()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}