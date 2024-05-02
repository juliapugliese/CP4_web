import { Client } from "@/app/interfaces/clients";

//papel do banco de dados
//Array(Client)
const clients: Client[] = [
    {
        name: 'Julia G',
        address: 'Rua Galatea'
    },
    {
        name: 'Gabriela',
        address: 'Rua Mariana'
    },
    {
        name: 'Gisele',
        address: 'Rua Glaucia'
    }
]; 


export function GET() {
    return Response.json(clients);
}

export async function POST(request: Request) {
    const form = await request.formData();
    const name = form.get('name') as string;
    const address = form.get('address') as string;

    clients.push({
        name, address
    });

    return Response.json({ status: 'Added'})
}