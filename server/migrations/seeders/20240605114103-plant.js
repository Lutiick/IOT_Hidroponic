/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Plant', [
      {
        id: 1,
        name: 'Tomato',
        description: 'Tomato is a red fruit.',
        nutrientVolume: 10,
        nutrientAdditionFrequency: 1,
        lastTimeNutrientAdded: new Date(),
        isSelected: 0,
        createdAt: new Date(),
      },
      {
        id: 2,
        name: 'Cucumber',
        description: 'Cucumber is a green fruit.',
        nutrientVolume: 10,
        nutrientAdditionFrequency: 1,
        lastTimeNutrientAdded: new Date(),
        isSelected: 0,
        createdAt: new Date(),
      },
      {
        id: 3,
        name: 'Potato',
        description: 'Potato is a brown fruit.',
        nutrientVolume: 10,
        nutrientAdditionFrequency: 1,
        lastTimeNutrientAdded: new Date(),
        isSelected: 0,
        createdAt: new Date(),
      },
      {
        id: 4,
        name: 'Carrot',
        description: 'Carrot is an orange fruit.',
        nutrientVolume: 10,
        nutrientAdditionFrequency: 1,
        lastTimeNutrientAdded: new Date(),
        isSelected: 0,
        createdAt: new Date(),
      },
      {
        id: 5,
        name: 'Onion',
        description: 'Onion is a white fruit.',
        nutrientVolume: 10,
        nutrientAdditionFrequency: 1,
        lastTimeNutrientAdded: new Date(),
        isSelected: 0,
        createdAt: new Date(),
      },
      {
        id: 6,
        name: 'Garlic',
        description: 'Garlic is a white fruit.',
        nutrientVolume: 10,
        nutrientAdditionFrequency: 1,
        lastTimeNutrientAdded: new Date(),
        isSelected: 0,
        createdAt: new Date(),
      },
      {
        id: 7,
        name: 'Pumpkin',
        description: 'Pumpkin is an orange fruit.',
        nutrientVolume: 10,
        nutrientAdditionFrequency: 1,
        lastTimeNutrientAdded: new Date(),
        isSelected: 0,
        createdAt: new Date(),
      },
      {
        id: 8,
        name: 'Spinach',
        description: 'Spinach is a green fruit.',
        nutrientVolume: 10,
        nutrientAdditionFrequency: 1,
        lastTimeNutrientAdded: new Date(),
        isSelected: 0,
        createdAt: new Date(),
      },
      {
        id: 9,
        name: 'Lettuce',
        description: 'Lettuce is a green fruit.',
        nutrientVolume: 10,
        nutrientAdditionFrequency: 1,
        lastTimeNutrientAdded: new Date(),
        isSelected: 0,
        createdAt: new Date(),
      },
      {
        id: 10,
        name: 'Cabbage',
        description: 'Cabbage is a green fruit.',
        nutrientVolume: 10,
        nutrientAdditionFrequency: 1,
        lastTimeNutrientAdded: new Date(),
        isSelected: 0,
        createdAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Plant', null, {});
  },
};
