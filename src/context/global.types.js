export const types = {
   SET_AUTH_METHODS: "SET_AUTH_METHODS",
   SET_USER: "SET_USER",
   SET_CARDS: "SET_CARDS",
   SET_CATEGORIES: "SET_CATEGORIES",
   IS_MENU_OPEN: "IS_MENU_OPEN",
   SET_THEME: "SET_THEME",
   SET_ARTICLES: "SET_ARTICLES",
   SET_SELECTED_ARTICLE: "SET_SELECTED_ARTICLE",
   SET_SELECTED_WORD: "SET_SELECTED_WORD",
   UPDATE_TRANSLATION: "UPDATE_TRANSLATION",
   SET_QUIZZ: "SET_QUIZZ",
   LOADING_WORD_TRANSLATION: "LOADING_WORDTRANSLATION",
   LOADING_ARTICLE_LIST: "LOADING_ARTICLE_LIST",
   LOADING_ARTICLE: "LOADING_ARTICLE",
   LOADING_CARDS: "LOADING_CARDS",
   LOADING_PROFILE: "LOADING_PROFILE",
   LOADING_QUIZZ: "LOADING_QUIZZ",
   SET_SCORE_LIST: "SET_SCORE_LIST"
}

export const constants = {
   USERS: "users",
   CATEGORIES: "categories",
   CARDS: "cards",
   SCORE: "score",
   CATEGORY: "category",
   SECTIONS: "sections",
   PACKS: "packs",
   FRONT_TERM: "frontTerm",
   ANSWER: "answer",
   VOCABULARY: "vocabulary",
   ARTICLES: "articles",
   QUIZZES: "quizzes",
   STUDY_VOCABULARY: "studyVocabulary",
   DELAY: 500
}

export const queryOperators = {
   LESS_THAN: "<",
   LESS_THAN_OR_EQUAL_TO: "<=",
   EQUAL_TO: "=",
   LIKE: "~",
   GREATER_THAN: ">",
   GREATER_THAN_EQUAL_TO: ">=",
   NOT_EQUAL_TO: "!=",
   ARRAY_CONTAINS: "array-contains",
   ARRAY_CONTAINS_ANY: "array-contains-any",
   IN: "in",
   NOT_IN: "not-in"
}

export const urls = {
   linguatools: "https://petapro-translate-v1.p.rapidapi.com/?"
}

export const headers = {
   "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_LINGUATOOLS,
   "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_LINGUATOOLS_HOST
}
