import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
export function buildProviders(){
  const providers=[];
  if(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET){
    providers.push(GoogleProvider({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}));
  }
  if(process.env.EMAIL_SERVER && process.env.EMAIL_FROM){
    providers.push(EmailProvider({server:process.env.EMAIL_SERVER,from:process.env.EMAIL_FROM}));
  }
  return providers;
}
export const authOptions = { providers: buildProviders(), session: { strategy: "jwt" } };
