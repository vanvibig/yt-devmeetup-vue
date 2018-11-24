import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageUrl: 'https://images.musement.com/cover/0002/49/thumb_148242_cover_header.jpeg?w=1200&h=630&q=60&fit=crop',
                id: 'adasdasdasd',
                title: 'Meetup in New York',
                date: '2018-07-17'
            },
            {
                imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/22/09/paris.jpg?w968h681',
                id: '243qetgdfhfd',
                title: 'Meetup in Paris',
                date: '2018-07-19'
            }
        ],
        user: {
            id: 'asdasdas213',
            registeredMeetups: ['243qetgdfhfd']
        }
    },
    mutations: {
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload);
        }
    },
    actions: {
        createMeetup({commit}, payload) {
            const meetup = {...payload};
            commit('createMeetup', meetup);
        }
    },
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            });
        },
        featuredMeetups(state, getters) {
            return getters.loadedMeetups.slice(0, 5);
        },
        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => meetup.id === meetupId);
            }
        }
    }
});
