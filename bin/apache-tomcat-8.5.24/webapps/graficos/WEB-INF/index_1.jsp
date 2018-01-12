<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="/vispublicaTagLib" prefix="vispublica" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Exemplo de Utilização da API Vispublica 2.0</title>
    </head>

    <body>
        <p>Hello! This is the default welcome page for a Spring Web MVC project.</p>
        <p><i>To display a different welcome page for this project, modify</i>
            <tt>index.jsp</tt> <i>, or create your own welcome page then change
                the redirection in</i> <tt>redirect.jsp</tt> <i>to point to the new
                welcome page and also update the welcome-file setting in</i>
            <tt>web.xml</tt>.</p>
        <vispublica:visualization id="visualizacao" visId= "1005" 
                              xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>
                              <tecnica id=\"1005\">
                                <metadados>
                                    <titulo>Número de Campi Avançados.</titulo>
                                    <grupos>
                                        <grupo tipo=\"numerico\">2009</grupo>
                                        <grupo tipo=\"numerico\">2010</grupo>
                                    </grupos>
                                </metadados>
                                <dados>
                                    <dado>
                                        <nome>Amazonas</nome>
                                        <valores>
                                            <valor grupo=\"2009\">300</valor>
                                            <valor grupo=\"2010\">750</valor>
                                        </valores>
                                    </dado>
                                </dados>
                            </tecnica>
                              " />    
    </body>

</html>
