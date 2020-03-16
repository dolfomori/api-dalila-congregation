"use strict";module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert(
      'groups',
      [
        {
          id: 1,
          number: 1,
          leader: 'Laércio',
          assistant: 'Arinaldo',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          number: 2,
          leader: 'Fernando A.',
          assistant: 'Paulo',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          number: 3,
          leader: 'Elídio',
          assistant: 'Djavan',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          number: 4,
          leader: 'Fernando Brito',
          assistant: 'Rodrigo S.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          number: 5,
          leader: 'Felipe',
          assistant: 'Saulo',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          number: 6,
          leader: 'José Carlos',
          assistant: 'João Marcos',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    const groups = await queryInterface.sequelize.query(
      `SELECT id from GROUPS;`
    );

    const groupRows = groups[0];

    return queryInterface.bulkInsert(
      'publishers',
      [
        {
          name: 'Laercio',
          group_id: groupRows[0].id,
          elder: true,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Arinaldo',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: true,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Amanda',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cainã',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Carlos',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Daniel R.',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Esmeralda',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Giovana B.',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Gisele',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'João Vitor',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'José Barros',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Maria G.',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Maria Melão',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Milena',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Miriam Ramires',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Monique Bazan',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Robson',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sandra Alonso',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Saulo Rocha',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Silvana Melão',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Tereza',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Vera Pereira',
          group_id: groupRows[0].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },

        // Grupo 2

        {
          name: 'Fernando A.',
          group_id: groupRows[1].id,
          elder: true,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Paulo',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: true,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Angélica',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Bruna G.',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Daniela P.',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Euzi',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'José Germano',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lara',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Larissa',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Leonardo.',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Léa',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lucas G.',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Luciana Rota',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: 'Mateus Rota',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Meire',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rachel',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rodrigo G.',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Simone',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Vanilde',
          group_id: groupRows[1].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },

        // grupo 3
        {
          name: 'Elídio',
          group_id: groupRows[2].id,
          elder: true,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Djavan',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: true,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Antonia',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Aldevan',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Áurea',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Edmilson',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Emerson',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Enzo',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Fátima',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Felipe Anatório',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Ivo',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Ivo Jr.',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lúcia',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Maria de Lurdes',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Mariane',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Nádia',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Odete',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Paulo A.',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Regina',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rita',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rozani',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Sileide',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Suely',
          group_id: groupRows[2].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },

        // grupo 4

        {
          name: 'Fernando Brito',
          group_id: groupRows[3].id,
          elder: true,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rodrigo S.',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: true,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Adenil',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Andréia',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Andrelino',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Antonia D.',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Beatriz',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Clélia',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Clineu',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Djalma',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Elaine',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Elysangela',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Gilma',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Gnesa',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Gustavo',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Hermes',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Levy',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lilian V.',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Margarete',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Silvia D.',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Thaís B.',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Wagner',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Willian',
          group_id: groupRows[3].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },

        // grupo 5
        {
          name: 'Felipe',
          group_id: groupRows[4].id,
          elder: true,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Saulo',
          group_id: groupRows[4].id,
          elder: true,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Aline Assis',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Agnaldo',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cida S.',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Elisabeth',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Fernanda',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Flávia',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Francelina',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Jesus',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'João Ferreira',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Laura',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Maria Olindina',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Mariana',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Paula S.',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rodolfo Assis',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rosangela',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rosangela',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Roseli',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rosilda',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Verinalva',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Wilson',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Zilda',
          group_id: groupRows[4].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },

        // grupo 6
        {
          name: 'José Carlos',
          group_id: groupRows[5].id,
          elder: true,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'João Marcos',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: true,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: 'Abílio Jr.',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Ângelo',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Carina B.',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Cida C.',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Donizete',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Elias',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Érica Aline',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Fernando Jr.',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Hilda',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Jaqueline',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Jorgina',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Leni P.',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Leonardo R.',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Nete',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rosa',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Tatiane T.',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Uilton F.',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Wanderli F.',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Zulene',
          group_id: groupRows[5].id,
          elder: false,
          ministerial_servant: false,
          pioneer: false,
          baptized: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('groups', null, {});
    await queryInterface.bulkDelete('publishers', null, {});
  },
};
