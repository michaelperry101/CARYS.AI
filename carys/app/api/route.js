export async function POST(req){
  try{
    const { message } = await req.json();
    if(!message || typeof message!=='string') return Response.json({ reply:"Say something and I'll reply." });
    const apiKey = process.env.OPENAI_API_KEY;
    if(!apiKey) return Response.json({ reply:`You said: ${message}` });
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method:"POST", headers:{ "Authorization":`Bearer ${apiKey}`, "Content-Type":"application/json" },
      body: JSON.stringify({ model:"gpt-3.5-turbo", messages:[{role:"system",content:"You are Carys, a crisp and helpful assistant."},{role:"user",content:message}] })
    });
    if(!resp.ok){ return Response.json({ reply:`You said: ${message}` }); }
    const data = await resp.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || `You said: ${message}`;
    return Response.json({ reply });
  }catch{ return Response.json({ reply:"Sorry, something went wrong." }); }
}
