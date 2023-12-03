[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1gq2JVFq)


El servidor requiere Mongo para funcionar. El backend lo tengo en el puerto 3000, el front en el 3001 y el mongo en el puerto 27017 Puedes levantar una instancia de Mongo en un conteneder de Docker con el siguiente comando:

Para crear un contenedor nuevo de Mongo en Docker:
sudo docker run --name mongodb -d -p 27017:27017 mongo:5.0

Iniciar un instancia de Mongo con Docker ya existente, en donde mongodb es el nombre del contenedor:
sudo docker start mongodb 

Ver los contenedores que están andando:
sudo docker ps