import { Chance } from 'chance';

const chance = new Chance();

export const chatMessageMock = (howMany: number): any[] =>
  Array.from({ length: howMany }).map((_, index) => ({
    id: chance.guid(),
    username: chance.name(),
    twitch: chance.name(),
    date: new Date(),
    message: chance.paragraph({ sentences: 1 }),
    mod: false,
    suscriber: false,
    color: chance.color(),
    emote: {},
  }));
