package com.company.appname.bean;

import java.util.HashMap;
import java.util.Map;

/**
 * Clase que representa un usuario.
 * @author OMartinez, V1.1
 * @version 1.0, 14/08/2016
 */
public class UsuarioBean {
    
    private String usuario = "";
    private int idUsuario = 0;
    private String contrasena = "";
    private String nombre = "";
    private String perfil = "";
    private String correo = "";
    private Map<String,String> permisos = new HashMap<String,String>();

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getPerfil() {
        return perfil;
    }

    public void setPerfil(String perfil) {
        this.perfil = perfil;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public Map<String,String> getPermisos() {
        return permisos;
    }

    public void setPermisos(Map<String,String> permisos) {
        this.permisos = permisos;
    }
    
    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }
    
}
