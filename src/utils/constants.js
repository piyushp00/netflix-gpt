export const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const APP_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PROFILE_IMG =
  "https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABcneBldkGcbgYjPgwnW-HRjOJ93AwX39sxZ2FAj4IPlGtigiVmEXnXGteXkpfXhQLoHHFocRZjxundCZlmgei__FL_RnasQBgkuv.png?r=7c7";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const NOW_PLAYING_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const POPULAR_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?page=1";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "हिंदी" },
  { identifier: "spanish", name: "Española" },
  { identifier: "chinese", name: "普通话" },
  { identifier: "korean", name: "한국인" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY

