import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Meetups from '../components/Meetup/Meetups';
import Meetup from '../components/Meetup/Meetup';
import CreateMeetup from '../components/Meetup/CreateMeetup';
import Profile from '../components/User/Profile';
import Signin from '../components/User/Signin';
import Signup from '../components/User/Signup';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/meetups',
        name: 'Meetups',
        component: Meetups
    },
    {
        path: '/meetups/:id',
        name: 'Meetup',
        props: true,
        component: Meetup
    },
    {
        path: '/meetups/new',
        name: 'CreateMeetup',
        component: CreateMeetup
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    },
];
export default new Router({
    routes,
    mode: 'history'
});
