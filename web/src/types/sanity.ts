interface SanityDocument {
	_id: string;
	_type: string;
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
}

interface BasePost extends SanityDocument {
	postTitle?: string;
	postCategory: string;
	background: string;
}

export interface SingleTrackPost extends BasePost {
	_type: "singleTrackPost";
	trackTitle: string;
	trackUrl: string;
}

export type Post = SingleTrackPost;
