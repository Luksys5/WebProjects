import Vue from 'vue';
import Vuex from 'vuex';

type User = {
    name: string;
    image: string;
    skills?: string[];
    age: number;
    workplace?: string;
    birthDate: Date;
    height?: string;
    weight?: string;
    matchInfo?: string;
};

type AppState = {
    users: User[];
    matches: User[];
}

Vue.use(Vuex);

export default new Vuex.Store<AppState>({
  state: {
    users: [
      {
        name: 'Jack',
        age: 16,
        image: 'https://picsum.photos/200/300',
        birthDate: new Date(),
      },
      {
        name: 'Tracy',
        age: 19,
        image: 'https://picsum.photos/200/300',
        workplace: 'Home',
        birthDate: new Date(),
      },
      {
        name: 'Russel',
        age: 24,
        image: 'https://picsum.photos/200/300',
        birthDate: new Date(),
      },
      {
        name: 'Karen',
        age: 19,
        image: 'https://picsum.photos/200/300',
        workplace: 'Manipulating people .inc',
        birthDate: new Date(),
      },
      {
        name: 'Joe',
        age: 16,
        image: 'https://picsum.photos/200/300',
        skills: ['cooking', 'netflix', 'hiking'],
        birthDate: new Date(),
      },
      {
        name: 'Megan',
        age: 23,
        image: 'https://picsum.photos/200/300',
        workplace: 'Alias',
        birthDate: new Date(),
      },
    ],
    matches: [],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
