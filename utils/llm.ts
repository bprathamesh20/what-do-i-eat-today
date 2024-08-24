import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function getLLMResponse(prompt:string) {
  const chatCompletion = await getGroqChatCompletion(prompt);
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
  return chatCompletion.choices[0]?.message?.content || ""
}

export async function getGroqChatCompletion(prompt:string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Role play as food suggestion agent.
        -You will suggest me food based on my mood 
        -Do not give me recipes 
        -Suggest me at most 3 food dishes at a time 
        -Options should have atleast one veg option


        #Gaurdrails
        -Avoid answers with hate speech
        -Only suggest food nothing else
        #mood
        ${prompt}`,
      },
    ],
    model: "llama-3.1-70b-versatile",
  });
}