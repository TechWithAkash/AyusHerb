import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { prompt } = req.body
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `Generate an innovative idea for: ${prompt}`,
        max_tokens: 100
      })
      res.status(200).json({ idea: response.data.choices[0].text.trim() })
    } catch (error) {
      res.status(500).json({ error: 'Error generating idea' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}