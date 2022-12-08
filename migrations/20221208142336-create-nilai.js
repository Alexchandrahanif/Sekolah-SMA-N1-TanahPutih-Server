"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Nilais", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      jumlahNilai: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      IdSIswa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Siswas",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      IdMataPelajaran: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "MataPelajarans",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Nilais");
  },
};
