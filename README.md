Funtional Test using Gerkin and Cucumber 

Prueba para social login con facebook y Prueba para peticion REST a restcountries

Ya que en ambos casos se deben realizar los mismos procedimiento, la explicacion sera en paralelo.

Como primer paso debemos estructura nuestro archivo feacture el cual contendra la definicion de nuestro escenario

https://ibb.co/Jry4wML
https://ibb.co/09VBGRF

Una vez tenemos definido nuestro escneario, pasamos a implementar el archivo JS para posteriormente probar si los datos de nuestro usuario son obtenidos de manera correcta

https://ibb.co/f4wfJWh
https://ibb.co/Jry4wML

Finalmente probaremos que la informacion del usuario definido y la informacion que obtenemos del REST countris sea obtenida de forma correcta, esto a traves del comando 

./node_modules/.bin/cucumber-js features/ -r features/steps/

https://ibb.co/m4HnKFY
https://ibb.co/DMqgGj1
