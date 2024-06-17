'use strict';
const fs = require('fs');
const path = require('path');

const SQLFilePath = path.join(__dirname, 'create-db.sql');
let SQLFileContent = fs.readFileSync(SQLFilePath, 'utf8');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(SQLFileContent);
  },

  async down(queryInterface, Sequelize) {},
};
