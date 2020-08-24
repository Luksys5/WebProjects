import Vue from 'vue';
import Vuex from 'vuex';

type User = {
    name: string;
    image: string;
    age: number;
    height?: string;
    weight?: string;
    additionalInfo?: {
        birthDate: Date;
        skills?: string[];
        workplace?: string;
        degree?: string;
        movieGenre?: string[];
        musicGenre?: string[];
    };
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
                height: '192',
                weight: '85'
            },
            {
                name: 'Tracy',
                age: 19,
                image: 'https://picsum.photos/200/300',
                height: '177',
                weight: '100'
            },
            {
                name: 'Russel',
                age: 24,
                image: 'https://picsum.photos/200/300',
                height: '199',
                weight: '80'
            },
            {
                name: 'Karen',
                age: 19,
                image: 'https://picsum.photos/200/300',
                height: '186',
                weight: '85'
            },
            {
                name: 'Joe',
                age: 16,
                image: 'https://picsum.photos/200/300',
                height: '178',
                weight: '160'
            },
            {
                name: 'Megan',
                age: 23,
                image: 'https://picsum.photos/200/300',
                height: '160',
                weight: '57.5'
            }
        ],
        matches: []
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
});
