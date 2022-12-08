"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Siswas", {
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
      NISN: {
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
      namaAyah: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      namaIbu: {
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
    await queryInterface.dropTable("Siswas");
  },
};
