interface SanityDocument {
	_id: string;
	_type: string;
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
}

interface BasePost extends SanityDocument {
	postTitle?: string;
	postTitleAlignment: "left" | "right";
	postCategory: string;
	background: string;
}

export interface MusicPost extends BasePost {
	_type: "musicPost";
	releaseName: string;
	releaseArtist: string;
	releaseCoverArt?: string;
	releaseDescription?: string;
	trackInfos: {
		trackFile: string;
		trackName: string;
		trackArtist: string;
	}[];
}

export type Post = MusicPost;
