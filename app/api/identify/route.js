// // app/api/identify/route.js
// import { NextResponse } from 'next/server'
// import { GoogleGenerativeAI } from '@google/generative-ai'

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

// export async function POST(request) {
//   try {
//     const data = await request.formData()
//     const image = data.get('image')

//     if (!image) {
//       return NextResponse.json({ error: 'No image provided' }, { status: 400 })
//     }

//     const buffer = await image.arrayBuffer()
//     const base64Image = Buffer.from(buffer).toString('base64')

//     const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' })

//     const prompt = `Identify this AYUSH herbal plant and provide the following information:
//     1. Common name
//     2. Scientific name
//     3. List of common medicinal uses in Ayurveda, Yoga & Naturopathy, Unani, Siddha, or Homeopathy

//     Format the response as a JSON object with the following structure:
//     {
//       "name": "Common name",
//       "scientificName": "Scientific name",
//       "uses": ["Use 1", "Use 2", "Use 3"]
//     }`

//     const result = await model.generateContent([
//       prompt,
//       { inlineData: { data: base64Image, mimeType: 'image/jpeg' } }
//     ])

//     const response = await result.response
//     const text = response.text()

//     // Parse the JSON response
//     const plantInfo = JSON.parse(text)

//     return NextResponse.json({ identification: plantInfo })
//   } catch (error) {
//     console.error('Error in plant identification:', error)
//     return NextResponse.json({ error: 'Failed to identify plant' }, { status: 500 })
//   }
// }

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

    const arrayBuffer = await image.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString('base64');

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

    const result = await model.generateContent([
      prompt,
      { inlineData: { data: base64Image, mimeType: image.type } }
    ]);

    const response = await result.response;
    const text = response.text();

    const plantInfo = JSON.parse(text);

    return NextResponse.json({ identification: plantInfo });
  } catch (error) {
    console.error('Error in plant identification:', error);
    return NextResponse.json({ error: 'Failed to identify plant' }, { status: 500 });
  }
}