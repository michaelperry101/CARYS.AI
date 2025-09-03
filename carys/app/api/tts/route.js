export async function POST(req){
  try{
    const { text, voiceId } = await req.json();
    if(!text) return new Response("Missing text",{status:400});
    const apiKey = process.env.ELEVENLABS_API_KEY;
    if(!apiKey) return new Response("ELEVENLABS_API_KEY not set",{status:500});
    const vid = voiceId || process.env.ELEVENLABS_VOICE_ID || "21m00Tcm4TlvDq8ikWAM";
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${vid}`;
    const r = await fetch(url, { method:"POST", headers:{ "xi-api-key":apiKey, "Content-Type":"application/json", "Accept":"audio/mpeg" },
      body: JSON.stringify({ text, model_id:"eleven_multilingual_v2", voice_settings:{ stability:0.4, similarity_boost:0.8 } })
    });
    if(!r.ok){ const err=await r.text(); return new Response(err || "TTS error",{status:500}); }
    const audio = await r.arrayBuffer();
    return new Response(audio,{status:200,headers:{ "Content-Type":"audio/mpeg" }});
  }catch{ return new Response("Server error",{status:500}); }
}
