import { Configuration, OpenAIApi } from "https://cdn.skypack.dev/openai";

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

async function ChatMod (quest) {
  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: quest,
    temperature: 0.2,
    max_tokens: 20,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  var res = response.data.choices[0].text;
  return res;
}
export default ChatMod;

// // testing without API
// const ChatMod = (quest) => {
//   return quest
// }
// export default ChatMod;