<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<v-card>
					<v-card-title>
						<h1 class="primary--text">{{meetup.title}}</h1>
					</v-card-title>
					<v-img
									:src="meetup.imageUrl"
									height="400px">
					</v-img>
					<v-card-text>
						<div class="primary--text">{{meetup.date}} - {{meetup.location}}</div>
						<div>{{meetup.description}}</div>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn class="primary">Register</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
      props: ['id'],
	    computed: {
          meetup() {
              return this.$store.getters.loadedMeetup(this.id) || {};
          }
			}
	}
</script>