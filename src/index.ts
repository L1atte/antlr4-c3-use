import { computeTokenPosition, getSuggestions, setTokenMatcher, filterTokens, filterTokens_fuzzySearch } from "./auto/index";
const code = `fun test() {
    val v = 1
    val z = 
}`;
let suggestions = getSuggestions(code, { line: 3, column: 13 }, computeTokenPosition);
console.log("suggestion", suggestions, suggestions.indexOf("v"));
