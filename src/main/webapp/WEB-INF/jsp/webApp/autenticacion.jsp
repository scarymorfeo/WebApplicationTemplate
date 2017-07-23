<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>WebApplicationTemplate</title>
        <link href="${pageContext.request.contextPath}/resources/libs/bootstrap-3.3.7/css/bootstrap.min.css" rel="stylesheet">    
        <link href="${pageContext.request.contextPath}/resources/css/autenticacion.css" rel="stylesheet">
        <script type="text/javascript" src="${pageContext.request.contextPath}/resources/libs/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/resources/libs/bootstrap-3.3.7/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/autenticacion.js"></script>
    </head>
    <body>
        <div class="container-centering">
            <div class="row-centering " >
                <div class="centering text-center">
                    <form class="form-signin" role="form" action="autenticar.htm" method="post">
                        <h3>WebApplicationTemplate</h3>
                        <input type="text" class="form-control" required placeholder="Usuario" autofocus="" name="usuario"/>
                        <input type="password" class="form-control" required placeholder="Contrase&ntilde;a" name="contrasena"/>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" data-loading-text="Iniciando sesi&oacute;n...">Iniciar sesi&oacute;n</button>
                    </form>
                    <c:if test="${not empty mensajeError}">
                        <div class="alert alert-danger alert-dismissable" >
                            ${mensajeError}
                        </div>
                    </c:if>
                </div>
            </div>
        </div>
        <input type="hidden" id="context-path" value="${pageContext.request.contextPath}" />
    </body>
</html>