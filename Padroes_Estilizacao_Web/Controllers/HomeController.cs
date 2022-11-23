using Microsoft.AspNetCore.Mvc;
using Padroes_Estilizacao_Web.Models;
using System;
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

        public IActionResult GraficoBolhasUnico()
        {
            return View();
        }

        public IActionResult Efeito3D()
        {
            return View();
        }

        public IActionResult EfeitoRelogio()
        {
            return View();
        }

        public IActionResult GraficosBarra()
        {
            return View();
        }

        public IActionResult DashboardFormatoBarra()
        {
            return View();
        }


        /*Controller para simular a busca de dados no Banco de Dados*/
        [HttpGet("/Home/CarregaGrafico")]
        public JsonResult CarregaGrafico()
        {
            Random Aleatorio = new Random();
            int[] valores = new int[100];


            for (int i = 0; i < valores.Length; i++)
            {
                valores[i] = Aleatorio.Next(1,100);
            }


            var dados = new List<GraficoModel>();

            for (int i = 0; i < 8; i++)
            {
                dados.Add(new GraficoModel
                {
                    TituloRodape = string.Concat(" Coluna - ", i.ToString()),
                    Porcentagem = valores[i]
                });
            }

            return Json(new { dados = dados });
        }


        public IActionResult DivsEditaveis()
        {
            return View();
        }

        
        public IActionResult Outros()
        {
            return View();
        }


        /*Controller para buscar as imagens*/
        [HttpGet("/Home/ListaImagens")]
        public async Task<JsonResult> ListaImagens()
        {
            var listaImagens = new List<FotosPaginaInicial>();

            listaImagens.Add(new FotosPaginaInicial
            {
                descricao = "Essa é a Primeira Imagem",
                url = "/img/fotos-pagina-inicial/IMG_8028.JPG"
            });
            listaImagens.Add(new FotosPaginaInicial
            {
                descricao = "Essa é a Segunda Imagem",
                url = "/img/fotos-pagina-inicial/IMG_8029.JPG"
            });
            listaImagens.Add(new FotosPaginaInicial
            {
                descricao = "Essa é a Terceira Imagem",
                url = "/img/fotos-pagina-inicial/IMG_8030.JPG"
            });
            listaImagens.Add(new FotosPaginaInicial
            {
                descricao = "Essa é a Quarta Imagem",
                url = "/img/fotos-pagina-inicial/IMG_8031.JPG"
            });
            return Json(listaImagens);
        }
        


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}