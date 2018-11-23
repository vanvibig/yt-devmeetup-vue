<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm10 md8 offset-md2>
				<v-card class="info">
					<v-container fluid>
						<v-layout row>
							<v-flex xs5 sm4 md3>
								<v-img
												src="https://images.musement.com/cover/0002/49/thumb_148242_cover_header.jpeg?w=1200&h=630&q=60&fit=crop"
												height="130px">
								</v-img>
							</v-flex>
							<v-flex xs7 sm8 md9>
								<v-card-title primary-title>
									<div>
										<h1 class="white--text mb-0">My Meetups</h1>
										<strong>17th July 2018</strong>
									</div>
								</v-card-title>
								<v-card-actions>
									<v-btn flat to="/meetups/1">
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