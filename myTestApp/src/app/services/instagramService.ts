import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { throwError  } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable()
export class InstagramService {
	
	constructor(private http: Http) {}

		getImages() {
		return this.http.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=4791253071.52ed645.dd337b49a4cd46dbbdf044d2b256dae2")
					.pipe(map(response => response.json()))
					.pipe(map(obj => obj.data))
					.pipe(map(array => {
						return array.map(obj => {
							return {
								id: obj.id,
								images: obj.images,
								alt: obj.caption.text,
								likes: obj.likes.count,
								comments: obj.comments.count,
								user: obj.user,
								location: obj.location,
							}
						})	
					}))
	}

	getUser() {
		return this.http.get("https://api.instagram.com/v1/users/self/?access_token=4791253071.52ed645.dd337b49a4cd46dbbdf044d2b256dae2")
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


