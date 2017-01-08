# A PARTIR DA IMAGEM UBUNTU
FROM ubuntu

# FAÇA ESSE COMANDO
RUN apt-get update && apt-get install -y apache2

# USE A PORTA 8080
EXPOSE 8080

# EXECUTA UM COMANDO NO CMD
CMD ["usr/sbin/apache2ctl", "-D", "FOREGROUND"]