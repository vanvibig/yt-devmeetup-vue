<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h2 class="primary--text">Create A new Meetup</h2>
			</v-flex>
		</v-layout>
		<v-layout row>
			<v-flex xs12>
				<form @submit.prevent="onCreateMeetup">
					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-text-field
											name="title"
											label="Title"
											id="title"
											v-model="title"
											required
							></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-text-field
											name="location"
											label="Location"
											id="location"
											v-model="location"
											required
							></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-text-field
											name="imageUrl"
											label="Image URL"
											id="imageUrl"
											v-model="imageUrl"
											required
							></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<img :src="imageUrl" height="150px">
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-textarea
											name="description"
											label="Description"
											id="description"
											v-model="description"
											required
							></v-textarea>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<h4>Choose a Date & Time</h4>
						</v-flex>
					</v-layout>
					<v-layout row class="mb-2">
						<v-flex xs12 sm6 offset-sm3>
							<v-date-picker v-model="date"></v-date-picker>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-time-picker v-model="time" format="24hr"></v-time-picker>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-btn
											:disabled="!formIsValid"
											class="primary"
											type="submit">Create Meetup
							</v-btn>
						</v-flex>
					</v-layout>
				</form>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                location: '',
                imageUrl: '',
                description: '',
                date: new Date().toISOString().substr(0, 10),
                time: new Date()
            }
        },
        computed: {
            formIsValid() {
                return this.title !== ''
                    && this.location !== ''
                    && this.imageUrl !== ''
                    && this.description !== ''
            },
            submittableDateTime() {
                const date = new Date();
                if (typeof this.time === 'string') {
                    const hours = this.time.match(/^(\d+)/)[1];
                    const minutes = this.time.match(/:(\d+)/)[1];
                    date.setHours(hours);
                    date.setMinutes(minutes);
                } else {
                    date.setHours(this.time.getHours());
                    date.setMinutes(this.time.getMinutes());
                }
                return date;
            }
        },
        methods: {
            onCreateMeetup() {
                if (!this.formIsValid) {
                    return;
                }
                const meetupData = {
                    title: this.title,
                    location: this.location,
                    imageUrl: this.imageUrl,
                    description: this.description,
                    date: this.submittableDateTime,
                    id: Math.random().toString(36).substring(7)
                };
                this.$store.dispatch('createMeetup', meetupData);
                this.$router.push('/meetups');
            }
        }
    }
</script>