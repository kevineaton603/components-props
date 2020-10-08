import faker from 'faker';

faker.seed(123);

const generateData = () => {
    return [
        ...Array.from({length: 10}).map(() => ({
            name: faker.name.findName(),
            email: faker.internet.email(),
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent(),
        })),
        ...Array.from({length: 10}).map(() => ({
            name: faker.name.findName(),
            email: faker.internet.email(),
            createdAt: faker.date.past(),
            updatedAt: faker.date.past(),
        })),
    ]
}

export default generateData;
