<!DOCTYPE html>
<!--<%@page contentType="text/html" pageEncoding="UTF-8"%>-->
<link href="UFF.css" rel="stylesheet" type="text/css"/>
<style type="text/css">
@import url("../UFF.css");
</style>
<%@taglib uri="/vispublicaTagLib" prefix="vispublica" %>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Sistema DAQ/UFF</title>
<link href="../favicon.ico" rel="icon" type="image/x-icon" />
<link href="../favicon.ico" rel="shortcut icon" type="image/x-icon" />
</head>

<body>
<div id="wrapper">
  <div id="asf-box"> </div>
  <div id="banner">
    <div  id="banner-esquerda"><img src="../dnit.png" alt="[tomcat logo]" width="150" /></div>
    <div id="banner-direita"><img src="../uff.jpg" width="73" height="80"></div>
  </div>
  <div id="upper" class="curved TextoMargem">
    <div id="congrats" class="curved TextoMargem">
      <h3>AÇÕES EXECUTIVAS DA DIRETORIA DE INFRAESTRUTURA AQUAVIÁRIA DO DEPARTAMENTO NACIONAL DE INFRAESTRUTURA DE TRANSPORTES PARA O APRIMORAMENTO E FOMENTO DA INFRAESTRUTURA AQUAVIÁRIA – EXPLORAÇÃO DO RIO MADEIRA</h3>
    </div>
    <!--
    <div id="actions">
      <div class="button"> <a class="TextoMargem shadow" href="/manager/status"><span>Server Status</span></a> </div>
      <div class="button"> <a class="TextoMargem shadow" href="/manager/html"><span>Manager App</span></a> </div>
      <div class="button"> <a class="TextoMargem shadow" href="/host-manager/html"><span>Host Manager</span></a> </div>
    </div>
--> 
  </div>
  <div id="middle">
    <h2>Banco de Informações</h2>
    <div id="informacao">
      <div id="informacao1"> <a href="..">
        <h3>Página Inicial</h3>
        </a></div>
      <div id="informacao1"> <a href="grafico.jsp">
        <h3>Estrutura dos Arquivos</h3>
        </a></div>
      <div id="informacao1">
        <h3><a href="../geoinf.html">Geoinformações</a></h3>
      </div>
      <div id="informacao1">
        <h3><a href="../UFF2.qvf">Download Base no Qlik</a></h3>
      </div>
      <div id="informacao1">
        <h3>Download da Base no MySQL</h3>
      </div>
    </div>
  </div>
  <h2>Estrutura dos Arquivos</h2>
  <p>&nbsp;</p>
	<canvas id="viewport" width="1000" height="800"></canvas>
  <div id="lower">
	<div > 
<!--
    <div id="low-manage" class=""> </div>
    <div id="low-docs" class=""> </div>
    <div id=low-help class=""> </div>
    <br class="separator" />
    <br class="separator" />
-->
    
   
    <!-- run from the original source files: --> 
    <!-- <script src="../../src/etc.js"></script>
       <script src="../../src/kernel.js"></script>
       <script src="../../src/graphics/colors.js"></script>
       <script src="../../src/graphics/primitives.js"></script>
       <script src="../../src/graphics/graphics.js"></script>
       <script src="../../src/tween/easing.js"></script>
       <script src="../../src/tween/tween.js"></script>
       <script src="../../src/physics/atoms.js"></script>
       <script src="../../src/physics/physics.js"></script>
       <script src="../../src/physics/system.js"></script>
       <script src="../../src/dev.js"></script> --> 
    
    <!-- run from the minified library file: --> 
	 <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>   
    <script src="lib/arbor.js"></script> 
    <script src="lib/renderer.js"></script> 
    <script src="lib/main.js"></script> 
    <!--	  <%@taglib uri="/vispublicaTagLib" prefix="vispublica" %>--> 
    
    <!-- <vispublica:visualization id="visualizacao" visId= "1003" 
                              xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<tecnica id=\"1003\">
	<metadados>
		<titulo>Quantidade de Jovens Matriculados no Projovem Urbano</titulo>
		<grupos>
			<grupo tipo=\"numerico\">2010</grupo>
		</grupos>
	</metadados>
	<dados>
		<dado>
			<id>1</id>
			<nome>Arquivos</nome>
			<valores/>
			<noPai>raiz</noPai>
			<descricao>Estrutura dos Arquivos</descricao>
			<nivel>Geral</nivel>
		</dado>
		<dado>
			<id>2</id>
			<nome>Dados Estatísticos</nome>
			<valores/>
			<noPai>1</noPai>
			<descricao>Dados Estatísticos</descricao>
			<nivel>Tipo</nivel>
		</dado>
		<dado>
			<id>3</id>
			<nome>Dados de Navegação</nome>
			<valores/>
			<noPai>1</noPai>
			<descricao>Dados de Navegação</descricao>
			<nivel>Tipo</nivel>
		</dado>
		<dado>
			<id>4</id>
			<nome>Administrações Hidroviárias</nome>
			<valores/>
			<noPai>1</noPai>
			<descricao>Administrações Hidroviárias</descricao>
			<nivel>Tipo</nivel>
		</dado>
		<dado>
			<id>5</id>
			<nome>Rodovias, Ferrovias e Sedes Municipais</nome>
			<valores/>
			<noPai>1</noPai>
			<descricao>Rodovias, Ferrovias e Sedes Municipais</descricao>
			<nivel>Tipo</nivel>
		</dado>
		<dado>
			<id>6</id>
			<nome>Quilombolas e Terras Indígenas</nome>
			<valores/>
			<noPai>1</noPai>
			<descricao>Quilombolas e Terras Indígenas</descricao>
			<nivel>Tipo</nivel>
		</dado>
		<dado>
			<id>7</id>
			<nome>Hidrografia e Pontos de Origem e Destinos</nome>
			<valores/>
			<noPai>1</noPai>
			<descricao>Hidrografia e Pontos de Origem e Destinos</descricao>
			<nivel>Tipo</nivel>
		</dado>
		<dado>
			<id>8</id>
			<nome>Unidades de Conservação</nome>
			<valores/>
			<noPai>1</noPai>
			<descricao>Unidades de Conservação</descricao>
			<nivel>Tipo</nivel>
		</dado>
		<dado>
			<id>9</id>
			<nome>Barragens e Eclusas</nome>
			<valores/>
			<noPai>1</noPai>
			<descricao>Barragens e Eclusas</descricao>
			<nivel>Tipo</nivel>
		</dado>
		<dado>
			<id>10</id>
			<nome>Países</nome>
			<valores/>
			<noPai>1</noPai>
			<descricao>Países</descricao>
			<nivel>Tipo</nivel>
		</dado>
		<dado>
			<id>11</id>
			<nome>Indústrias Esmagadoras de Soja</nome>
			<valores/>
			<noPai>1</noPai>
			<descricao>Indústrias Esmagadoras de Soja</descricao>
			<nivel>Tipo</nivel>
		</dado>
		<dado>
			<id>12</id>
			<nome>Dados de Demanda</nome>
			<valores/>
			<noPai>1</noPai>
			<descricao>Dados de Demanda</descricao>
			<nivel>Tipo</nivel>
		</dado>
		<dado>
			<id>13</id>
			<nome>Mapa das Administrações Hidroviárias</nome>
			<valores><valor>teste</valor></valores>
			<noPai>4</noPai>
			<descricao>Administrações Hidroviárias</descricao>
			<nivel>Arquivo</nivel>
		</dado>
	</dados>
</tecnica>

  " /> <br class="separator" />--> 
    
  </div>
  <div id="footer" class="curved TextoMargem">
    <div class="col25">
      <div class="TextoMargem">
        <h4>Outros Downloads</h4>
        <ul>
          <li><a href="http://servicos.dnit.gov.br/vgeo/">Visualizador de Informações Geográficas do Departamento Nacional de Infraestrutura de Transportes (DNIT) - VGEO</a></li>
        </ul>
      </div>
    </div>
    <div class="col25">
      <div class="TextoMargem">
        <h4>Outros Documentos</h4>
        <ul>
          <ul>
            <li><a> </a></li>
          </ul>
        </ul>
      </div>
    </div>
    <div class="col25">
      <div class="TextoMargem">
        <h4>Links Úteis</h4>
        <ul>
          <ul>
            <li><a href="http://portal.antaq.gov.br/">Agência Nacional de Transportes Aquaviários - ANTAQ</a></li>
            <li><a href="http://www.abiove.org.br/site/">Associação Brasileira das Índustrias de Óleos Vegetais - ABIOVE</a></li>
            <li><a href="http://www.mdic.gov.br/comercio-exterior/estatisticas-de-comercio-exterior/comex-vis">Visualizações de Comércio Exterior - ComexVis (Siscomex)</a></li>
          </ul>
        </ul>
      </div>
    </div>
    <div class="col25">
      <div class="TextoMargem">
        <h4>Diversos</h4>
        <ul>
          <ul>
            <li><a> </a></li>
          </ul>
        </ul>
      </div>
    </div>
    <br class="separator" />
  </div>
  <p class="copyright">Copyright &copy;1999-${year} Apache Software Foundation.  All Rights Reserved</p>
</div>
</body>
</html>