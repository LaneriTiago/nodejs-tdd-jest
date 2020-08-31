require('dotenv').config({  
  path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || 'mysql',
  storage: './__tests__/database.sqlite', //utilizar como padrão a raiz do projeto
  define: {
    timestamps: true,
    underscored: true, //aplicação de nome com underscore e não camelcase
    underscoredAll: true, //aplicação de nome com underscore e não camelcase
  },
}