export const types = {
   SET_AUTH_METHODS: "SET_AUTH_METHODS",
   SET_USER: "SET_USER",
   SET_CARDS: "SET_CARDS",
   SET_DYNAMICCARDS: "SET_DYNAMICCARDS",
   CREATE_CARD: "CREATE_CARD",
   DELETE_CARD: "DELETE_CARD",
   UPDATE_CARDS: "UPDATE_CARDS",
   UPDATE_RANDOM_CARD: "UPDATE_RANDOM_CARD",
   SET_RANDOM_CARD: "SET_RANDOM_CARD",
   SET_CATEGORIES: "SET_CATEGORIES",
   CATEGORY_SELECTED: "CATEGORY_SELECTED",
   CATEGORY_ID: "CATEGORY_ID",
   CREATE_CATEGORY: "CREATE_CATEGORY",
   DELETE_CATEGORY: "DELETE_CATEGORY",
   SERVICE_ERROR: "SERVICE_ERROR",
   IS_MENU_OPEN: "IS_MENU_OPEN",
   CREATE_SECTION: "CREATE_SECTION",
   UPDATE_SECTIONS: "UPDATE_SECTIONS",
   SELECTED_SECTION: "SELECTED_SECTION",
   SET_SECTION: "SET_SECTION",
   SET_THEME: "SET_THEME",
   SET_ARTICLES: "SET_ARTICLES",
   SET_SELECTED_ARTICLE: "SET_SELECTED_ARTICLE",
   SET_SELECTED_WORD: "SET_SELECTED_WORD",
   UPDATE_TRANSLATION: "UPDATE_TRANSLATION",
   SET_QUIZZ: "SET_QUIZZ"
}

export const constants = {
   CATEGORIES: "categories",
   CARDS: "cards",
   CATEGORY: "category",
   SECTIONS: "sections",
   PACKS: "packs",
   FRONT_TERM: "frontTerm",
   ANSWER: "answer",
   VOCABULARY: "vocabulary",
   ARTICLES: "articles",
   QUIZZES: "quizzes",
   STUDY_VOCABULARY: "studyVocabulary",
   NEED_SIGN_UP: "You need to be loged in to use this feature!"
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
export const emojiList = [
   "❤️",
   "🧡",
   "💛",
   "💚",
   "💙",
   "💜",
   "🤎",
   "🖤",
   "🤍",
   "❤️",
   "🧡",
   "💛",
   "💚",
   "💙",
   "💜",
   "🤎",
   "🖤",
   "🤍"
]
