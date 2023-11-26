// app/api/img/route.ts
export async function GET(request: Request) {
    return new Response(JSON.stringify({
        name:"Punk",
        symbol: "PUNK",
        description: "PUNK represent a unique blend of internet culture and digital finance",
        image: "https://dataapi-f8d3b.web.app/punk.jpg"
    }), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
