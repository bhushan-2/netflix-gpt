export const BG_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USR_ICON =
  "https://static.vecteezy.com/system/resources/previews/008/506/404/original/contact-person-red-icon-free-png.png";

export const MOVIE_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const MOVIE_IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
];

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;