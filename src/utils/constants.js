export const USER_PHOTO = "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"

export const LOGIN_BG_IMG = 'https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg'

export const NETFLIX_LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'

export const MOVIE_API_URL_INDIA = 'https://streaming-availability.p.rapidapi.com/shows/search/filters?country=in&show_type=movie&series_granularity=show&order_by=original_title&output_language=en&order_direction=asc&genres_relation=and';

export const MOVIE_API_URL_CANADA = 'https://streaming-availability.p.rapidapi.com/shows/search/title?country=us&title=Harry%20Potter&output_language=en&show_type=movie&series_granularity=show';
export const MOVIE_API_URL_US = 'https://streaming-availability.p.rapidapi.com/shows/search/filters?country=us&show_type=movie&series_granularity=show&order_by=original_title&output_language=en&order_direction=desc&genres_relation=and';
export const MOVIE_API_URL_BRAZIL = 'https://streaming-availability.p.rapidapi.com/shows/search/filters?country=br&show_type=movie&series_granularity=show&order_by=original_title&output_language=en&order_direction=asc&genres_relation=and';
export const MOVIE_API_URL_GERMAN = 'https://streaming-availability.p.rapidapi.com/shows/search/filters?country=de&show_type=movie&series_granularity=show&order_by=original_title&output_language=en&order_direction=asc&genres_relation=and';
export const MOVIE_API_URL_SA = 'https://streaming-availability.p.rapidapi.com/shows/search/filters?country=za&show_type=movie&series_granularity=show&order_by=original_title&output_language=en&order_direction=asc&genres_relation=and';
export const MOVIE_API_URL_UK = 'https://streaming-availability.p.rapidapi.com/shows/search/filters?country=gb&show_type=movie&series_granularity=show&order_by=original_title&output_language=en&order_direction=asc&genres_relation=and';
export const MOVIE_API_URL_BAT = 'https://streaming-availability.p.rapidapi.com/shows/search/title?country=us&title=Batman&output_language=en&show_type=movie&series_granularity=show';

// df01734478msha6f2d8706294a71p13b31bjsn510c8b7f348b

export const MOVIE_API_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API,
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

export const langaugeIdentify = [
	{identifier: "en", lang: "English"},
	{identifier: "hindi", lang: "Hindi"},
	{identifier: "french", lang: "French"},
]

export const OPEN_AI = process.env.REACT_APP_OPEN_AI
