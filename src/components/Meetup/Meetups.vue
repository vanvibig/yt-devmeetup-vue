<template>
	<v-container>
		<v-layout row wrap class="mb-2"
							v-for="meetup in meetups"
							:key="meetup.id">
			<v-flex xs12 sm10 md8 offset-md2>
				<v-card class="info">
					<v-container fluid>
						<v-layout row>
							<v-flex xs5 sm4 md3>
								<v-img
												:src="meetup.imageUrl"
												height="130px">
								</v-img>
							</v-flex>
							<v-flex xs7 sm8 md9>
								<v-card-title primary-title>
									<div>
										<h1 class="white--text mb-0">{{meetup.title}}</h1>
										<strong>{{meetup.date}}</strong>
									</div>
								</v-card-title>
								<v-card-actions>
									<v-btn flat :to="'/meetups/'+meetup.id">
										<v-icon left light>arrow_forward</v-icon>
										View Meetups
									</v-btn>
								</v-card-actions>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
    export default {
        computed: {
            meetups() {
                return this.$store.getters.loadedMeetups
            }
        }
    }
</script>