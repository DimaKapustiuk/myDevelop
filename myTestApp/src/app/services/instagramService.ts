import { Http } from '@angular/http';
import { Injectable, Component } from '@angular/core';
import { throwError  } from 'rxjs';
import { map, catchError} from 'rxjs/operators';



@Injectable()


export class InstagramService {

	private urls = {
		images: 'https://api.instagram.com/v1/users/self/media/recent/',
		user: 'https://api.instagram.com/v1/users/self/',
	}

	private accessToken = JSON.parse(localStorage.getItem('token'));
	
	constructor(private http: Http) {

	}

		getImages() {
		return this.http.get(`${this.urls.images}?${this.accessToken}`)
					.pipe(map(response => response.json()))
					.pipe(map(obj => obj.data ))
					.pipe(map(array => {
						return array.map(obj => {
							return {
								id: obj.id,
								images: obj.images,
								alt: obj.user.text || 'Images Alt',
								likes: obj.likes.count,
								comments: obj.comments.count,
								user: obj.user,
								location: obj.location ||  "",
							}
						})	
					}))		
	}

	getUser() {
		return this.http.get(`${this.urls.user}?${this.accessToken}`)
					.pipe(map(response => response.json()))
					.pipe(map(obj => obj.data))
					.pipe(map(obj => {
						return {
							id: obj.id,
							full_name: obj.full_name,
							photo: obj.profile_picture,
							username: obj.username,
							bio: obj.bio,
							website: obj.website,
							media: obj.counts.media,
							follows: obj.counts.follows,
							followedBy: obj.counts.followed_by,
						}
					}),
					catchError(error => throwError('Error in response')))			
	}
}


