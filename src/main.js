import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsListVue from './components/teams/TeamsList.vue';
import UsersListVue from './components/users/UsersList.vue';
import TeamMemberVue from './components/teams/TeamMembers.vue';

const router = createRouter({
    // this adds a routing history, (like what the last visited page was)
    history: createWebHistory(),
    // this is where we define the routes
    routes: [
        {path: '/teams', component: TeamsListVue}, // our-domain.com/teams => TeamsListVue
        {path: '/users', component: UsersListVue},
        {path: '/teams/:userId', component: TeamMemberVue}
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app');