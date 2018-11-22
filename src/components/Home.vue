<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn router to="/meetups" class="info">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn router to="/meetups/new" class="info">Organize Meetups</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item
                            v-for="meetup in meetups"
                            :src="meetup.imageUrl"
                            :key="meetup.id"
                    >
                        <div class="title">
                            {{meetup.title}}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <p>Join our awesome meetups!</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                meetups: [
                    {
                        imageUrl: 'https://images.musement.com/cover/0002/49/thumb_148242_cover_header.jpeg?w=1200&h=630&q=60&fit=crop',
                        id: 'adasdasdasd',
                        title: 'Meetup in New York'
                    },
                    {
                        imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/22/09/paris.jpg?w968h681',
                        id: '243qetgdfhfd',
                        title: 'Meetup in Paris'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .title {
        position: absolute;
        bottom: 50px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 2em;
    }
</style>