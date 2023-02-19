// export const VALID_EXTENSIONS = { image: /image\/(png|jpg|jpeg|gif)/i };
export const VALID_EXTENSIONS = { image: /image\/(png|jpg|jpeg|gif)/i, audio: /audio\/(mp3|wav|m4a|flac|mpeg)/i, video: /video\/(mp4)/i };

export const MAX_FILE_SIZE = 1500000000; // 1.5GB

export const BASE64_MAX_SIZE = 50000000;

export const MEDIA_TYPE = {
    All: 'all',
    Image: 'image',
    Movie: 'video',
    Sound: 'audio',
    Other: 'text,application',
};