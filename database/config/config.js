module.exports = {
  "development": {
    "username": "root",
    "password": "Juanma.1991",
    "database": "db_globaltech",
    "host": "localhost",
    "dialect": "mysql",
    "logging": sql => sql.substr(0,20)
  },
  "test": {
    "username": "root",
    "password": "Juanma.1991",
    "database": "db_globaltech",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "Juanma.1991",
    "database": "db_globaltech",
    "host": "localhost",
    "dialect": "mysql"
  }
}
