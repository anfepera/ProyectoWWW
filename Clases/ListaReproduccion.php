<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of ListaReproduccion
 *
 * @author felipe
 */
class ListaReproduccion {
    var $id;
    var $nombre;
    var $rutaImagen;
    
     function __construct($id,$nombre,$rutaImagen) 
    {
         $this->id=$id;
         $this->nombre=$nombre;
         $this->rutaImagen=$rutaImagen;
         
     }
     
    public function getId() {
        return $this->id;
    }

    public function setId($id) {
        $this->id = $id;
    }
    
     public function getNombre() {
        return $this->nombre;
    }

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }
    public function getRutaImagen() {
        return $this->nombre;
    }

    public function setRutaImagen($nombre) {
        $this->nombre = $nombre;
    }
    
}

?>
