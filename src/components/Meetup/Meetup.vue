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
						<div class="primary--text">{{meetup.date}} - Where it takes place</div>
						<div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</div>
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