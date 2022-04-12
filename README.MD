<!-- Encabezados -->

# Sitio web para Grupo de Imvestigacion de Seguridad Informatica SIRSEG Universidad ECCI


![SirSeg](./src/logo.svg)


#  Requisitos para correr el proyecto


Puede ver el proyecto en el siguiente repositorio

* >[Github/SIRSEG-ECCI](https://github.com/Naofumi-Alu/Naofumi-Alu.github.io/blob/master/src/Components/listNavMain.js "Repo Project")
    

* Instalar NodeJS y npm

___

## Scripts para Ejecutar en linea de comandos 

* Ejecutar el comnado npm install para instalar dependencias

>  `npm install`

* Ejecute **npm start** para correr en entorno de desarrollo

> `npm start`

* Ejecute **npm run build** para correr construccion el proyecto en entorno de produccion

> `npm run build`

# Arquitectura del proyecto

## La estructura del proyecto es la siguiente

1. La carpeta Build contiene la construccion del proyecto

2. La carpeta src contiene el codigo fuente de la aplicacion

3. El archivo de configuracion de webpack es el archivo webpack.config.js 

4. El archivo de configuracion para JSX y ECS Moderno està en el archivo .babelrc

5. Los componentes de la aplicacion están en la carpeta src/components

6. Las hojas de estilos estan en la carpeta src

7. Los logos de la aplicacion están en la carpeta src

8. Las imagenes de la aplicacion estan en la carpeta src/images

9. El archivo Index.html esta en la carpeta src

10. La carpeta UtilitiesComponents esta en la carpeta src y en ella estara los coponentes de utilidad (esta vacia)

11. El componente App es el componente de la aplicacion

12. El componente Index inserta la aplicacion en el DOM

13. El componente App esta divido en componentes de Navegacion que son 2, y una funcion que selecciona las vistas para el componente del contenido

14. El componente ErrorBoundary esta diseñado para atrapar errores decomponentes, se recomienda usarlo como nodo padre si crea algun componente que puede llegar a fallar

***Nota**: Es similar a **Try/Catch**  con la diferencia que trata errores de renderizado en Componentes*

15. El archivo CommitsHistorial esta diseñado para mostrar los commits de la aplicacion usando Git

# Recomendaciones

16. Tener conocimiento de la libreria de Js Gsap para animaciones e interpolaciones

17. Conocimiento de React, de componentes y de Hooks de estado y efecto


![React](https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg)


## Colaboradores

@Naofumi-Alu
@Sebastian217
