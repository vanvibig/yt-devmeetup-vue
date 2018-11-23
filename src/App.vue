<template>
	<v-app>
		<v-toolbar dark class="purple darken-1">
			<v-toolbar-side-icon class="hidden-sm-and-up"
													 @click="sideNav = !sideNav">
			</v-toolbar-side-icon>
			<v-toolbar-title>
				<router-link to="/" tag="span" style="cursor: pointer">Dev Meetup</router-link>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items
							v-for="item in menuItems"
							:key="item.title"
							class="hidden-xs-only">
				<v-btn exact
							 :to="item.link"
							 flat>
					<v-icon>{{ item.icon }}</v-icon>
					{{item.title}}
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		<main>
			<router-view></router-view>
		</main>
		<v-navigation-drawer absolute temporary v-model="sideNav">
			<v-list>
				<v-list-tile
								v-for="item in menuItems"
								:key="item.title"
								exact
								:to="item.link"
				>
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
                    {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
                    {icon: 'room', title: 'Organize Meetup', link: '/meetup/new'},
                    {icon: 'person', title: 'Profile', link: '/profile'},
                    {icon: 'face', title: 'Sign up', link: 'signup'},
                    {icon: 'lock_open', title: 'Sign in', link: 'signin'},
                ]
            }
        }
    }
</script>

<style lang="stylus">
	@import "./stylus/main.styl"
</style>