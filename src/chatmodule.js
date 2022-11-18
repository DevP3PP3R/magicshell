import { Configuration, OpenAIApi } from 'https://cdn.skypack.dev/openai';

function ChatModule(){
    const configuration = new Configuration({
        apiKey: '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',
        });
    const openai = new OpenAIApi(configuration);

    openai.createCompletion({
    model: "text-davinci-002",
    prompt: "",
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    }).then((result)=>{console.log(result.data)});
}

export default ChatModule;