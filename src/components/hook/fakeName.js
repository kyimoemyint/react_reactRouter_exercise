import { faker } from '@faker-js/faker';

export const fakeNames = Array.from(Array(0), () => {
    return faker.internet.userName();
  });