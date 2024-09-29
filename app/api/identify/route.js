import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API);

export async function POST(request) {
  try {
    console.log('GOOGLE_GEMINI_API:', process.env.GOOGLE_GEMINI_API); // Debug API key

    const data = await request.formData();
    const image = data.get('image');

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    // Convert image to base64
    const arrayBuffer = await image.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString('base64');

    // Define prompt and model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `Identify this AYUSH herbal plant and provide the following information:
    1. Common name
    2. Scientific name
    3. List of common medicinal uses in Ayurveda, Yoga & Naturopathy, Unani, Siddha, or Homeopathy

    Format the response as a JSON object with the following structure:
    {
      "name": "Common name",
      "scientificName": "Scientific name",
      "uses": ["Use 1", "Use 2", "Use 3"]
    }`;

    // Generate response from the model
    const result = await model.generateContent([
      prompt,
      { inlineData: { data: base64Image, mimeType: image.type } }
    ]);

    const response = await result.response;

    // Log raw response text for debugging
    const text = await response.text();
    console.log('Raw AI Response:', text);

    // Clean up response to extract valid JSON
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');
    const jsonString = text.slice(jsonStart, jsonEnd + 1);

    const plantInfo = JSON.parse(jsonString);

    return NextResponse.json({ identification: plantInfo });
  } catch (error) {
    console.error('Error in plant identification:', error);
    return NextResponse.json({ error: 'Failed to identify plant' }, { status: 500 });
  }
}
