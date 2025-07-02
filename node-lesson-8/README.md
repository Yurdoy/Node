1. npm init -y
2. npm i express dotenv sequelize sequelize-cli mysql2
npm i -D nodemon 
3. Настройка package.json:
ставим type: module
  "scripts": {
    "dev": "nodemon app.js"
  },
  убедитесь, что нодмон находится в devDependencies
4. инициализируем работу ORM npx sequelize-cli init
5. Появится config, migrations, models, seeders (можно удалить)
заходим в config.json, там устанавливаем значения подключения к вашу mySql серверу (внимательно протестируйте подключение через workBench)
6. Создаем db.js внутри config папки
import { Sequelize } from "sequelize";
import fs from "fs";
const configData = JSON.parse(fs.readFileSync(new URL('./config.json', import.meta.url)));
//С 22 версии не работает assert
// import configData from './config.json' assert {type: 'json'}
const env = 'development'
const config = configData[env]
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect
    }
)
export default sequelize
7. Инициализуем сервер с подключением к бд через ОРМ
import express from 'express'
import 'dotenv/config'
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3333

app.get('/', (req, res) => {
    res.send('Hello, sequelize with Express')
})

app.listen(PORT, async() => {
    try {
        await sequelize.authenticate()
        console.log(`Connection to the database has been established successfully`)
        console.log(`Server is running on http://localhost:${PORT}`)
    } catch(error) {
        console.error('Unable to connect to the database: ', error)
    }
})
8. тестируем как работает сервер, если все ок, переходим дальше
9. Создание моделей Sequelize, например User.js
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: "Users",
    timestamps: false
})

export default User
10. Создание файлов миграции
npx sequelize-cli migration:generate --name create-user-table
создастся файл в папке миграций, ЕГО РАСШИРЕНИЕ СРАЗУ ПЕРЕИМЕНОВАТЬ в .cjs
Далее вставляем все что внизу в cjs файл
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users')
  }
};
11. npx sequelize-cli db:migrate 
мигрируем

Так же можно откатить миграцию
npx sequelize-cli db:undo