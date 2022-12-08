"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MataPelajarans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jadwal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      IdKelas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Kelas",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      IdGuru: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Gurus",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      IdKategoriMataPelajaran: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "KategoriMataPelajarans",
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
    await queryInterface.dropTable("MataPelajarans");
  },
};
