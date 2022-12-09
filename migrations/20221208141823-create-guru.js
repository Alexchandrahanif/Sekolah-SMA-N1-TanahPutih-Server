"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Gurus", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      namaLengkap: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      NIP: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tempatTanggalLahir: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nomorTelepon: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jenisKelamin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      agama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pendidikanTerakhir: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      IdKategoriGuru: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "KategoriGurus",
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
    await queryInterface.dropTable("Gurus");
  },
};
