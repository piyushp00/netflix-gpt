import OpenAI from "openai";
import { OPENAI_KEY } from "../utils/constants";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

const fetchGPTApi = async (query) => {
  const searchData = query;
  console.log("fn called")
  const gptResults = await openai.chat.completions.create({
    messages: [{ role: "system", content: searchData }],
    model: "gpt-3.5-turbo",
  });
  // console.log(gptResults.choices);

  return gptResults
  
};

export default fetchGPTApi;
