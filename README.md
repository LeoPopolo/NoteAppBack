# MicroServiciosNode

npm run dev

## docker 

 docker compose -f "docker-compose.yml" up -d --build 
 
# pgAdmin

 http://localhost:5050/login?next=%2F

environment:
      - PGADMIN_DEFAULT_EMAIL=admin@mail.com
      - PGADMIN_DEFAULT_PASSWORD=root

 registrar server 172.21.0.5

 environment:
      - POSTGRES_DB=contractings
      - POSTGRES_USER=admin
      - POSTGRES_PASSWORD=1234

# mongo DB

Pasos para conectarse a mongo DB
1. hay que bajarse el mongosh, setear la variable de entorno como dice el instructivo
2. para conectarse a la instancia local hay que usar el siguiente comando:
    mongosh mongodb://localhost:27017 -u miUsuario -p miPassword
