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
                date: '2018-07-17',
                location: 'New York',
                description: '<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>'
            },
            {
                imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/22/09/paris.jpg?w968h681',
                id: '243qetgdfhfd',
                title: 'Meetup in Paris',
                date: '2018-07-19',
                location: 'Paris',
                description: '<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>'
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
