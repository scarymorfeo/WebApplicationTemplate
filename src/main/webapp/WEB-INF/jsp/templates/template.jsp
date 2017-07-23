<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="t" uri="http://tiles.apache.org/tags-tiles"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="${pageContext.request.contextPath}/resources/libs/bootstrap-3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/resources/libs/bootstrap-3.3.7/css/bootstrap-theme.css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/resources/libs/font-awesome-4.6.3/css/font-awesome.min.css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/resources/css/mensajes.css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/resources/css/global.css" rel="stylesheet">
        <script type="text/javascript" src="${urlMapas}"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/resources/libs/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/resources/libs/bootstrap-3.3.7/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/temporizadorSesion.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/mensajes.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/global.js"></script>
        <title>WebApplicationTemplate</title>
    </head>
    <body>
        <t:insertAttribute name="encabezado" ignore="true" />
        <div id="contenedorAreaTrabajo" class="container">
            <div id="mensajeGlobal" class="notifications-inline"></div>
            <t:insertAttribute name="areaTrabajo" ignore="true" />
        </div>
    </body>
</html>