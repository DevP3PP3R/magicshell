// import { Configuration, OpenAIApi } from "https://cdn.skypack.dev/openai";

// const configuration = new Configuration({
//   apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);
// const ChatMod = (quest) => {
// openai.createCompletion({
//   model: "text-davinci-002",
//   prompt: quest,
//   temperature: 0.2,
//   max_tokens: 20,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// }).then((result)=>{
//   return(result.data.choices[0].text)
// });
// }
// export default ChatMod;

// testing without API
const ChatMod = (quest) => {
  return quest
}
export default ChatMod;