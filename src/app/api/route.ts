// app/api/img/route.ts
export async function GET(request: Request) {
    return new Response(JSON.stringify({
      name: "Baby Ponk",
      symbol: "BPONK",
      description: "BABYPONK represent a unique blend of internet culture and digital finance.",
      image: "https://dataapi-f8d3b.web.app/konk.jpg"
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  