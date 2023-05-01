const { sequelize } = require('./db/db');
const { Show, Dog, Pokemon, Trainer } = require('./db/models/index');
const { dogs, shows, pokemon, trainers } = require('./db/seed/seedData');

describe("Dog models", () => {

    beforeAll( async () => {
        await sequelize.sync({force:true});
    });

    test('if you can create a Dog', async () => {
        const dog = await Dog.create(dogs[0]);
        expect(dog).toBeDefined();
        expect(dog.breed).toBe('Labrador');
    });

    test('if you can create several Dogs', async () => {
        const newDogs = await Dog.bulkCreate(dogs.slice(1,6));
        expect(newDogs).toBeDefined();
        expect(newDogs.length).toBe(5);
    });

    test('if you can read a Dog', async () => {
        const dog = await Dog.findOne({ where: { breed: "Labrador" }});
        expect(dog).toBeDefined();
        expect(dog.breed).toBe('Labrador');
    });

    test('if you can update a Dog', async () => {
        const dog = await Dog.findOne({where: { breed: "Labrador"}});
        dog.update({ breed: "Plotthound" });
        const updatedDog = await Dog.findByPk(dog.id);
        expect(updatedDog).toBeDefined();
        expect(updatedDog.breed).toBe('Plotthound');
    });

    test('if you can delete a Dog', async () => {
        const allDogsStartNum = await Dog.count();
        await Dog.destroy({ where: { id: 5 }});
        const allDogs = await Dog.findAll();
        expect(allDogs.length).toBe(allDogsStartNum - 1);
        const deleted = await Dog.findAll({ where: { id: 5 }});
        expect(deleted.length).toBe(0);
    });

});

describe("Show models", () => {

    beforeAll( async () => {
        await sequelize.sync({force:true});
    });

    test('if you can create several Shows', async () => {
        const newShows = await Dog.bulkCreate(shows);
        expect(newShows).toBeDefined();
        expect(newShows.length).toBe(9);
    });

});