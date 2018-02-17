<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Favicon -->
    <link rel="shortcut icon" type="image/ico" href="favico.ico" />


    <title>Zona Sul - Minhas Ofertas</title>

    <!-- Bootstrap CSS -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet/less" href="_custom/css/main.less?8">
    <script type="text/javascript" src="_custom/js/less.js"></script>

    <!-- Fontawesome -->
    <link rel="stylesheet" href="_custom/plugins/font-awesome/css/font-awesome.min.css">

    <!-- Owl Carousel -->
    <link rel="stylesheet" href="_custom/plugins/owlcarousel/css/owl.carousel.min.css">
    <link rel="stylesheet" href="_custom/plugins/owlcarousel/css/owl.theme.default.min.css">

  </head>
  <body>

    <!-- MODULO DÚVIDAS -->
    <section class="modulo-duvidas">
      <div class="container">
        <h1>Tem Dúvidas?</h1> 
        
        <div class="wrapper-flex">
          
          <ul class="nav-videos">
            <li><a id="step01" class="toggle active" role="button" aria-expanded="false" aria-controls=""><i class="step">1</i><span>Veja como fazer o cadastro</span></a></li>
            <li><a id="step02" class="toggle" role="button" aria-expanded="false" aria-controls=""><i class="step">2</i><span>Como escolher os 10 produtos<br>e comprar com desconto</span></a></li>
            <li><a id="step03" class="toggle" role="button" aria-expanded="false" aria-controls=""><i class="step">3</i><span>Como comprar online<br>ou na loja física</span></a></li>
          </ul>

          <div class="box-videos">
            <div id="step01" class="collapse video-box active">
              <span>[ video 1 ]</span>  
            </div>
            <div id="step02" class="collapse video-box">
              <span>[ video 2 ]</span>
            </div>
            <div id="step03" class="collapse video-box">
              <span>[ video 3 ]</span>            
            </div>
          </div>

        </div>

        <!-- MOBILE -->
        <div class="wrapper-flex-mobile">
          <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingOne">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <i class="step">1</i><span>Veja como fazer o cadastro</span>
                </a>
              </div>
              <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <div class="panel-body">
                  [ video 1 ] 
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingTwo">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <i class="step">2</i><span>Como escolher os 10 produtos e comprar com desconto</span>
                </a>
              </div>
              <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="panel-body">
                  [ video 2 ]
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingThree">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <i class="step">3</i><span>Como comprar online ou na loja física</span>
                </a>
              </div>
              <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div class="panel-body">
                  [ video 3 ]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- FIM MODULO DÚVIDAS -->

    <!-- jQuery (obrigatório para plugins JavaScript do Bootstrap) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    
    <!-- Inclui todos os plugins compilados (abaixo), ou inclua arquivos separadados se necessário -->
    <script src="bootstrap/js/bootstrap.min.js"></script>

    <!-- Custom Scripts -->
    <script type="text/javascript" src="_custom/js/doc_bottom.js"></script>

    <!-- JS Owl Carousel -->
    <script src="_custom/plugins/owlcarousel/js/owl.carousel.min.js"></script>
  </body>
</html>
