<template>
    <v-app>
        <v-toolbar dark class="purple darken-1">
            <v-toolbar-side-icon class="hidden-sm-and-up" @click.native="sideNav = !sideNav"></v-toolbar-side-icon>
            <v-toolbar-title>Dev Meetup</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items v-for="item in menuItems" :key="item.title" class="hidden-xs-only">
                <v-icon>{{ item.icon }}</v-icon>
                <v-btn flat>{{item.title}}</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <main>
            <router-view></router-view>
        </main>
        <v-navigation-drawer v-model="sideNav">
            <v-list>
                <v-list-tile v-for="item in menuItems" :key="item.title">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>{{item.title}}</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                sideNav: false,
                menuItems: [
                    {icon: 'supervisor_account', title: 'View Meetups'},
                    {icon: 'room', title: 'Organize Meetup'},
                    {icon: 'person', title: 'Profile'},
                    {icon: 'face', title: 'Sign up'},
                    {icon: 'lock_open', title: 'Sign in'},
                ]
            }
        }
    }
</script>

<style lang="stylus">
    @import "./stylus/main.styl"
</style>