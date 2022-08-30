export const types = {
   SET_CARDS: "SET_CARDS",
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
   SERVICE_ERROR: "SERVICE_ERROR"
}

export const constants = {
   CATEGORIES: "categories",
   CARDS: "cards",
   CATEGORY: "category"
}

export const queryOperators = {
   LESS_THAN: "<",
   LESS_THAN_OR_EQUAL_TO: "<=",
   EQUAL_TO: "==",
   GREATER_THAN: ">",
   GREATER_THAN_EQUAL_TO: ">=",
   NOT_EQUAL_TO: "!=",
   ARRAY_CONTAINS: "array-contains",
   ARRAY_CONTAINS_ANY: "array-contains-any",
   IN: "in",
   NOT_IN: "not-in"
}
