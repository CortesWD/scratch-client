import { SIDES } from "../utils/constants";
export interface Album {
  id: number;
  title: string;
  image: string;
  artist?: Artist;
  year?: number;
  genre?: string[];
  owned?: boolean;
  format?: string[];
  trackList?: TrackList[];
}

export interface Artist {
  id: number;
  name: string;
  albums?: Album[];
  description?: string;
  image?: string;
}

export interface TrackList {
  title: string;
  duration: string;
  position: string;
}
export interface OrderedTrackList {
  side: (typeof SIDES)[number];
  tracks: TrackList[];
  lpNumber?: number;
}