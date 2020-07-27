# Node.js API and Postgres database

## Setting databse
  1- Access https://www.enterprisedb.com/postgresql-tutorial-resources-training?cid=55 , to download 11.8 version of PostgreSQL Database;
  
  2- Open the installer as administrator;
  
  3- Click next 2 times;
  
  4- On this step you can uncheck pgAdmin 4(Graphic Interface of Psostgres Manager ) if you don't want it;
  
  5- Select the wanted directory and click next;
  
  6- This application expects postgres user password as `admin`, so type it and click next;
  
  7- Here we have database port, don't change it and click next;
  
  8- Click next 2 times;
  
  9- Uncheck the checkbox and click Finish.
  
  10- Open SQL Shell(psql);
  
  11- Press Enter 4 times;
  
  12- Type the password(`admin`);
  
  13- Run the command `CREATE DATABASE api;` and close SQL Shell(psql);
  
## Installing Node.js
  1- Access https://nodejs.org/en/ and download the LTS version;
  
  2- Open the installer;
  
  3- Click next;
  
  4- Click terms checkbox and then next;
  
  5- Click next 3 times;
  
  6- Click Install;
  
  7- Click Finish;
  
  8- Just to be safe open cmd and type `node -v`, this should print installed node.js version.
  
## Configurando API node
  1- Clone the repository;
  
  2- Open cmd and navigate to directory where the repository was cloned;
  
  3- Execute the command "npm install";
  
  4- To start api use the command "npm start".
  


