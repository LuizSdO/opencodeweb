import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";

async function getCodigos(){
  const url = "http://localhost:8080/api/codigo"
  const resp = await fetch(url)
  return resp.json()
}

export default async function codigos() {
  const data = await getCodigos()
  return (
    <>
      <NavBar active={"codigos"} />

      <main className=" bg-violet-900 m-12 p-4 rounded">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Codigos</h2>
          <Button 
            icon={<PlusIcon className="h6 w-6" />}
            href="/codigos/form"
          >
            adicionar codigo
          </Button>
        </div>
        <div id="data">
          {data._embedded.entityModelList.map(codigos => <DataRow Codigos={codigos} />)}
        </div>
      </main>
    </>
  )
}