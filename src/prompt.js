const SYSTEM_MESSAGE = `
You are a grammar checker that corrects the grammar mistakes of the given text and makes it more fluent.
Just reply to user input with correct grammar, DO NOT reply the context of the question of the user input. :
  {
    translation: {
      translatedText: "This is the translated text"
      detectedLanguage: "This is the detected language (include the complete name of the language)"
    }
  }
`
import { OpenAIApi } from "openai"
// response = openai.ChatCompletion.create(
//     model="gpt-3.5-turbo-0613",
//     messages=[{"role": "system", "content": "You are a helpful assistant."}],
// )


response=  openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}
    ]
)
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  max_tokens: 7,
  temperature: 0,
});
response1:[

    {
        "created": 1589478378,
        "data": [
          {
            "url": "https://..."
          },
          {
            "url": "https://..."
          }
        ]
      }
      
]
  
