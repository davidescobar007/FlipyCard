export const types = {
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
   SET_THEME: "SET_THEME"
}

export const constants = {
   CATEGORIES: "categories",
   CARDS: "cards",
   CATEGORY: "category",
   SECTIONS: "sections",
   FRONT_TERM: "frontTerm",
   ANSWER: "answer"
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

// export const emojiList = [
//    "U+262D",
//    "U+2622",
//    "U+2691",
//    "U+262E",
//    "U+262F",
//    "U+26A0",
//    "U+26A1",
//    "U+2668",
//    "U+2692",
//    "U+2693",
//    "U+2694",
//    "U+269B",
//    "U+2623",
//    "U+231A",
//    "U+231B",
//    "U+1F432",
//    "U+1F440",
//    "U+1F41D",
//    "U+2690",
//    "U+1F4A2",
//    "U+2618",
//    "U+270C",
//    "U+2707",
//    "U+221E",
//    "U+00A9",
//    "U+1F43E",
//    "U+1F48B",
//    "U+1F463",
//    "U+1F30F",
//    "U+1F340",
//    "U+2620",
//    "U+2121",
//    "U+2315",
//    "U+260E",
//    "U+260F",
//    "U+2706",
//    "U+1F4DE",
//    "U+1F4F1",
//    "U+1F4F2",
//    "U+1F4F3",
//    "U+1F4F4",
//    "U+1F4E7",
//    "U+0040",
//    "U+2709",
//    "U+1F4EA",
//    "U+1F4EB",
//    "U+1F4EE",
//    "U+2615",
//    "U+2701",
//    "U+2702",
//    "U+2703",
//    "U+2704",
//    "U+270D",
//    "U+270E",
//    "U+270F",
//    "U+2710",
//    "U+2711",
//    "U+2712",
//    "U+2326",
//    "U+232B",
//    "U+2327",
//    "U+3376",
//    "U+2611",
//    "U+2705",
//    "U+2713",
//    "U+2714",
//    "U+2716",
//    "U+2717",
//    "U+2718",
//    "U+2611",
//    "U+2612",
//    "U+2190",
//    "U+2191",
//    "U+2192",
//    "U+2193",
//    "U+2194",
//    "U+2195",
//    "U+2196",
//    "U+2197",
//    "U+2198",
//    "U+2199",
//    "U+25B2",
//    "U+25BC",
//    "U+25C0",
//    "U+25B6",
//    "U+2794",
//    "U+2798",
//    "U+2799",
//    "U+279A",
//    "U+279B",
//    "U+279C",
//    "U+279D",
//    "U+279E",
//    "U+279F",
//    "U+27A0",
//    "U+27A1",
//    "U+27A2",
//    "U+27A3",
//    "U+27A4",
//    "U+27A5",
//    "U+27A6",
//    "U+21AA",
//    "U+21A9",
//    "U+219A",
//    "U+219B",
//    "U+219C",
//    "U+219D",
//    "U+219E",
//    "U+219F",
//    "U+21A0",
//    "U+21A1",
//    "U+21A2",
//    "U+21A3",
//    "U+21A4",
//    "U+21A6",
//    "U+21A5",
//    "U+21A7",
//    "U+21A8",
//    "U+21AB",
//    "U+21AC",
//    "U+21AD",
//    "U+21AE",
//    "U+21AF",
//    "U+21B0",
//    "U+21B1",
//    "U+21B2",
//    "U+21B4",
//    "U+21B3",
//    "U+21B5",
//    "U+21B6",
//    "U+21B7",
//    "U+21B8",
//    "U+21B9",
//    "U+21BA",
//    "U+21BB",
//    "U+21BC",
//    "U+21BD",
//    "U+21BE",
//    "U+21BF",
//    "U+21C0",
//    "U+21C1",
//    "U+21C2",
//    "U+21C3",
//    "U+21C4",
//    "U+21C5",
//    "U+21C6",
//    "U+21C7",
//    "U+21C8",
//    "U+21C9",
//    "U+21CA",
//    "U+21CB",
//    "U+21CC",
//    "U+21CD",
//    "U+21CF",
//    "U+21D5",
//    "U+21D6",
//    "U+21D7",
//    "U+21D8",
//    "U+21D9",
//    "U+21D9",
//    "U+21DA",
//    "U+21DB",
//    "U+21DC",
//    "U+21DD",
//    "U+21DE",
//    "U+21DF",
//    "U+21DF",
//    "U+21DF",
//    "U+21E0",
//    "U+21E1",
//    "U+21E2",
//    "U+21E3",
//    "U+21E4",
//    "U+21E5",
//    "U+21E6",
//    "U+21E8",
//    "U+21E9",
//    "U+21EA",
//    "U+21E7",
//    "U+27A7",
//    "U+27A8",
//    "U+27A9",
//    "U+27AA",
//    "U+27AB",
//    "U+27AC",
//    "U+27AD",
//    "U+27AE",
//    "U+27AF",
//    "U+27B1",
//    "U+27B2",
//    "U+27B3",
//    "U+27B4",
//    "U+27B5",
//    "U+27B6",
//    "U+27B7",
//    "U+27B8",
//    "U+27B9",
//    "U+27BA",
//    "U+27BB",
//    "U+27BC",
//    "U+27BD",
//    "U+27BE",
//    "U+23CE",
//    "U+2608",
//    "U+2607",
//    "U+2766",
//    "U+2767",
//    "U+2619",
//    "U+2765",
//    "U+2763",
//    "U+2661",
//    "U+2665",
//    "U+2764",
//    "U+27B3",
//    "U+10E6",
//    "U+1F48C",
//    "U+1F3E9",
//    "U+1F493",
//    "U+1F494",
//    "U+1F495",
//    "U+1F496",
//    "U+1F497",
//    "U+1F498",
//    "U+1F499",
//    "U+1F49A",
//    "U+1F49B",
//    "U+1F49C",
//    "U+1F49D",
//    "U+1F49E",
//    "U+1F49F",
//    "U+2605",
//    "U+2606",
//    "U+272A",
//    "U+272B",
//    "U+272F",
//    "U+2721",
//    "U+269D",
//    "U+26B9",
//    "U+2735",
//    "U+2749",
//    "U+274B",
//    "U+273A",
//    "U+2739",
//    "U+2738",
//    "U+2736",
//    "U+2737",
//    "U+2735",
//    "U+2734",
//    "U+2733",
//    "U+2732",
//    "U+2731",
//    "U+2727",
//    "U+2726",
//    "U+235F",
//    "U+229B",
//    "U+1F52F",
//    "U+1F320",
//    "U+1F31F",
//    "U+FE61",
//    "U+2743",
//    "U+2742",
//    "U+273C",
//    "U+273B",
//    "U+2730",
//    "U+2363",
//    "U+272D",
//    "U+225B",
//    "U+002A",
//    "U+066D",
//    "U+2744",
//    "U+2745",
//    "U+2746",
//    "U+2042",
//    "U+269C",
//    "U+2725",
//    "U+2724",
//    "U+273B",
//    "U+273C",
//    "U+273D",
//    "U+273E",
//    "U+2740",
//    "U+273F",
//    "U+2741",
//    "U+2743",
//    "U+2747",
//    "U+2748",
//    "U+2749",
//    "U+274A",
//    "U+274B",
//    "U+2698",
//    "U+2618",
//    "U+1F340",
//    "U+1F33C",
//    "U+1F33B",
//    "U+1F33A",
//    "U+1F339",
//    "U+1F338",
//    "U+1F337",
//    "U+16ED",
//    "U+2573",
//    "U+2613",
//    "U+2626",
//    "U+2628",
//    "U+2629",
//    "U+2670",
//    "U+2671",
//    "U+2719",
//    "U+271A",
//    "U+271B",
//    "U+271B",
//    "U+271C",
//    "U+271D",
//    "U+271E",
//    "U+271F",
//    "U+2720",
//    "U+274C",
//    "U+274E",
//    "U+2756",
//    "U+00D7",
//    "U+2716",
//    "U+2A33",
//    "U+2A3B",
//    "U+2625",
//    "U+2A36",
//    "U+2A37",
//    "U+2663",
//    "U+2776",
//    "U+2777",
//    "U+2778",
//    "U+2779",
//    "U+277A",
//    "U+277B",
//    "U+277C",
//    "U+277D",
//    "U+277E",
//    "U+277F",
//    "U+24EB",
//    "U+24EC",
//    "U+24ED",
//    "U+24EE",
//    "U+24EF",
//    "U+24F0",
//    "U+24F1",
//    "U+24F2",
//    "U+24F3",
//    "U+24F4",
//    "U+2460",
//    "U+2461",
//    "U+2462",
//    "U+2463",
//    "U+2464",
//    "U+2465",
//    "U+2466",
//    "U+2467",
//    "U+2468",
//    "U+2469",
//    "U+246A",
//    "U+246B",
//    "U+246C",
//    "U+246D",
//    "U+246E",
//    "U+246F",
//    "U+2470",
//    "U+2471",
//    "U+2472",
//    "U+2473",
//    "U+2160",
//    "U+2161",
//    "U+2162",
//    "U+2163",
//    "U+2164",
//    "U+2165",
//    "U+2166",
//    "U+2167",
//    "U+2168",
//    "U+2169",
//    "U+216A",
//    "U+216B",
//    "U+216C",
//    "U+216D",
//    "U+216E",
//    "U+216F",
//    "U+2180",
//    "U+2181",
//    "U+2182",
//    "U+00BD",
//    "U+00BC",
//    "U+2155",
//    "U+00BE",
//    "U+215B",
//    "U+215C",
//    "U+215D",
//    "U+215E",
//    "U+2153",
//    "U+2154",
//    "U+2156",
//    "U+2157",
//    "U+2158",
//    "U+2159",
//    "U+215A",
//    "U+24B6",
//    "U+24B7",
//    "U+24B8",
//    "U+24B9",
//    "U+24BA",
//    "U+24BB",
//    "U+24BC",
//    "U+24BD",
//    "U+24BE",
//    "U+24BF",
//    "U+24C0",
//    "U+24C1",
//    "U+24C2",
//    "U+24C3",
//    "U+24C4",
//    "U+24C5",
//    "U+24C6",
//    "U+24C7",
//    "U+24C8",
//    "U+24C9",
//    "U+24CA",
//    "U+24CB",
//    "U+24CC",
//    "U+24CD",
//    "U+24CE",
//    "U+24CF",
//    "U+2600",
//    "U+2601",
//    "U+2602",
//    "U+2614",
//    "U+2607",
//    "U+1F311",
//    "U+1F313",
//    "U+1F314",
//    "U+1F315",
//    "U+1F319",
//    "U+1F343",
//    "U+1F680",
//    "U+1F683",
//    "U+1F684",
//    "U+1F685",
//    "U+1F687",
//    "U+1F689",
//    "U+1F68C",
//    "U+1F68F",
//    "U+1F691",
//    "U+1F692",
//    "U+1F693",
//    "U+1F695",
//    "U+1F697",
//    "U+1F699",
//    "U+1F69A",
//    "U+1F6A2",
//    "U+1F6A4",
//    "U+2648",
//    "U+2649",
//    "U+264A",
//    "U+264B",
//    "U+264C",
//    "U+264D",
//    "U+264E",
//    "U+264F",
//    "U+2650",
//    "U+2651",
//    "U+2652",
//    "U+2653",
//    "U+26CE",
//    "U+2660",
//    "U+2664",
//    "U+2665",
//    "U+2661",
//    "U+2663",
//    "U+2667",
//    "U+2666",
//    "U+2662",
//    "U+2654",
//    "U+2655",
//    "U+2656",
//    "U+2657",
//    "U+2658",
//    "U+2659",
//    "U+265A",
//    "U+265B",
//    "U+265C",
//    "U+265D",
//    "U+265E",
//    "U+265F",
//    "U+20BD",
//    "U+2122",
//    "U+20B3",
//    "U+0E3F",
//    "U+FFE0",
//    "U+20A1",
//    "U+00A2",
//    "U+20A2",
//    "U+20B5",
//    "U+20AB",
//    "U+20AC",
//    "U+FFE1",
//    "U+00A3",
//    "U+20A4",
//    "U+20A3",
//    "U+0192",
//    "U+20B2",
//    "U+20AD",
//    "U+0141",
//    "U+20A5",
//    "U+20A6",
//    "U+20B1",
//    "U+FF04",
//    "U+0024",
//    "U+2133",
//    "U+20A9",
//    "U+FFE6",
//    "U+00A5",
//    "U+FFE5",
//    "U+20B4",
//    "U+20B8",
//    "U+00A4",
//    "U+20B0",
//    "U+17DB",
//    "U+20AA",
//    "U+20AF",
//    "U+20A0",
//    "U+20A7",
//    "U+FDFC",
//    "U+5186",
//    "U+5143",
//    "U+5713",
//    "U+3350",
//    "U+C6D0",
//    "U+09F3",
//    "U+20B9",
//    "U+20A8",
//    "U+09F2",
//    "U+0BF9",
//    "U+20AE",
//    "U+263F",
//    "U+2640",
//    "U+2641",
//    "U+2642",
//    "U+2643",
//    "U+2644",
//    "U+2645",
//    "U+2646",
//    "U+2647",
//    "U+260A",
//    "U+260B",
//    "U+26B8",
//    "U+25A0",
//    "U+25A1",
//    "U+25A2",
//    "U+25A3",
//    "U+25A4",
//    "U+25A5",
//    "U+25A6",
//    "U+25A7",
//    "U+25A8",
//    "U+25A9",
//    "U+25AA",
//    "U+25AB",
//    "U+25AC",
//    "U+25AD",
//    "U+25AE",
//    "U+25AF",
//    "U+25B0",
//    "U+25B1",
//    "U+25B2",
//    "U+25B3",
//    "U+25B4",
//    "U+25B5",
//    "U+25B6",
//    "U+25B7",
//    "U+25BA",
//    "U+25BB",
//    "U+25BC",
//    "U+25BD",
//    "U+25BE",
//    "U+25BF",
//    "U+25C0",
//    "U+25C1",
//    "U+25C4",
//    "U+25C5",
//    "U+25C6",
//    "U+25C7",
//    "U+25C8",
//    "U+25C9",
//    "U+25CA",
//    "U+25CB",
//    "U+25CC",
//    "U+25CD",
//    "U+25CE",
//    "U+25CF",
//    "U+25D0",
//    "U+25D1",
//    "U+25D2",
//    "U+25D3",
//    "U+25D4",
//    "U+25D5",
//    "U+25D6",
//    "U+25D7",
//    "U+25D8",
//    "U+25D9",
//    "U+25DA",
//    "U+25DB",
//    "U+25DC",
//    "U+25DD",
//    "U+25DE",
//    "U+25DF",
//    "U+25E0",
//    "U+25E1",
//    "U+25E2",
//    "U+25E3",
//    "U+25E4",
//    "U+25E5",
//    "U+25E6",
//    "U+25E7",
//    "U+25E8",
//    "U+25E9",
//    "U+25EA",
//    "U+25EB",
//    "U+25EC",
//    "U+25ED",
//    "U+25EE",
//    "U+25EF",
//    "U+2591",
//    "U+2592",
//    "U+2593",
//    "U+2588",
//    "U+274F",
//    "U+2750",
//    "U+2751",
//    "U+2752",
//    "U+0B86",
//    "U+0B87",
//    "U+0B90",
//    "U+0B93",
//    "U+0BA3",
//    "U+0BA9",
//    "U+0BB9",
//    "U+0BEB",
//    "U+0B9E",
//    "U+0BF5",
//    "U+0BF8",
//    "U+0B8A",
//    "U+0BF9",
//    "U+0BFA",
//    "U+0BD0",
//    "U+0D90",
//    "U+0D87",
//    "U+0DA2",
//    "U+0DAB",
//    "U+0D8F",
//    "U+0DB6",
//    "U+0DC6",
//    "U+1788",
//    "U+17B1",
//    "U+178E",
//    "U+1783",
//    "U+17DA",
//    "U+17D9",
//    "U+1F351",
//    "U+1F352",
//    "U+1F353",
//    "U+1F354",
//    "U+1F355",
//    "U+1F356",
//    "U+1F357",
//    "U+1F358",
//    "U+1F359",
//    "U+1F35A",
//    "U+1F35B",
//    "U+1F35C",
//    "U+1F35D",
//    "U+1F35E",
//    "U+1F35F",
//    "U+1F360",
//    "U+1F361",
//    "U+1F362",
//    "U+1F363",
//    "U+1F364",
//    "U+1F365",
//    "U+1F366",
//    "U+1F367",
//    "U+1F368",
//    "U+1F369",
//    "U+1F36A",
//    "U+1F36B",
//    "U+1F36C",
//    "U+1F36D",
//    "U+1F36E",
//    "U+1F36F",
//    "U+1F370",
//    "U+1F371",
//    "U+1F372",
//    "U+1F373",
//    "U+1F374",
//    "U+1F375",
//    "U+1F451",
//    "U+1F452",
//    "U+1F453",
//    "U+1F454",
//    "U+1F455",
//    "U+1F456",
//    "U+1F457",
//    "U+1F458",
//    "U+1F459",
//    "U+1F45A",
//    "U+1F45B",
//    "U+1F45C",
//    "U+1F45D",
//    "U+1F45E",
//    "U+1F45F",
//    "U+1F460",
//    "U+1F461",
//    "U+1F462",
//    "U+26BD",
//    "U+26BE",
//    "U+1F3C2",
//    "U+1F3C3",
//    "U+1F3C4",
//    "U+1F6B2",
//    "U+1F3BE",
//    "U+1F3BF",
//    "U+1F3C0",
//    "U+1F3C1",
//    "U+1F3C6",
//    "U+1F3C8",
//    "U+1F3CA",
//    "U+16A0",
//    "U+16A1",
//    "U+16A2",
//    "U+16A3",
//    "U+16A4",
//    "U+16A5",
//    "U+16A6",
//    "U+16A7",
//    "U+16A8",
//    "U+16A9",
//    "U+16AA",
//    "U+16AB",
//    "U+16AC",
//    "U+16AD",
//    "U+16AE",
//    "U+16AF",
//    "U+16B0",
//    "U+16B1",
//    "U+16B2",
//    "U+16B3",
//    "U+16B4",
//    "U+16B5",
//    "U+16B6",
//    "U+16B7",
//    "U+16B8",
//    "U+16B9",
//    "U+16BA",
//    "U+16BB",
//    "U+16BC",
//    "U+16BD",
//    "U+16BE",
//    "U+16BF",
//    "U+16C0",
//    "U+16C1",
//    "U+16C2",
//    "U+16C3",
//    "U+16C4",
//    "U+16C5",
//    "U+16C6",
//    "U+16C7",
//    "U+16C8",
//    "U+16C9",
//    "U+16CA",
//    "U+16CB",
//    "U+16CF",
//    "U+16D0",
//    "U+16D1",
//    "U+16D2",
//    "U+16D3",
//    "U+16D4",
//    "U+16D5",
//    "U+16D6",
//    "U+16D7",
//    "U+16D8",
//    "U+16D9",
//    "U+16DA",
//    "U+16DB",
//    "U+16DC",
//    "U+16DD",
//    "U+16DE",
//    "U+16DF",
//    "U+16E0",
//    "U+16E1",
//    "U+16E2",
//    "U+16E3",
//    "U+16E4",
//    "U+16E5",
//    "U+16E6",
//    "U+16E7",
//    "U+16E8",
//    "U+16E9",
//    "U+16EA",
//    "U+16ED",
//    "U+16EE",
//    "U+16EF",
//    "U+26A2",
//    "U+26A3",
//    "U+26A4",
//    "U+26A5",
//    "U+26A6",
//    "U+26A7",
//    "U+26A8",
//    "U+26A9",
//    "U+262A",
//    "U+262B",
//    "U+262C",
//    "U+2625",
//    "U+26B3",
//    "U+26B4",
//    "U+26B5",
//    "U+26B6",
//    "U+26B7",
//    "U+26B8",
//    "U+2646",
//    "U+2695",
//    "U+269A",
//    "U+2624",
//    "U+2669",
//    "U+266A",
//    "U+266B",
//    "U+266C",
//    "U+266D",
//    "U+266E",
//    "U+266F",
//    "U+1F3B6",
//    "U+1F3B5",
//    "U+261A",
//    "U+261B",
//    "U+261C",
//    "U+261D",
//    "U+261E",
//    "U+261F",
//    "U+261D",
//    "U+1F3A0",
//    "U+1F3A1",
//    "U+1F3A2",
//    "U+1F3A3",
//    "U+1F3A4",
//    "U+1F3A5",
//    "U+1F3A6",
//    "U+1F3A7",
//    "U+1F3A8",
//    "U+1F3A9",
//    "U+1F3AA",
//    "U+1F3AB",
//    "U+1F3AC",
//    "U+1F3AD",
//    "U+1F3AE",
//    "U+1F6A5",
//    "U+1F6A7",
//    "U+1F6A8",
//    "U+1F6A9",
//    "U+1F6AA",
//    "U+1F6AB",
//    "U+1F6AC",
//    "U+1F6AD",
//    "U+1F6B2",
//    "U+1F6B6",
//    "U+1F6B9",
//    "U+1F6BA",
//    "U+1F6BB",
//    "U+1F6BC",
//    "U+1F6BD",
//    "U+1F6BE",
//    "U+1F6C0",
//    "U+2672",
//    "U+2673",
//    "U+2674",
//    "U+2675",
//    "U+2676",
//    "U+2677",
//    "U+2678",
//    "U+2679",
//    "U+267A",
//    "U+267B"
// ]
