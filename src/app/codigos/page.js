import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getCodigos(){
  const url = "http://localhost:8080/api/codigo"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  return resp.json()
}

export default async function codigos() {
  const data = await getCodigos()
  return (
    <>
      <NavBar active={"codigos"} />

      <main className=" bg-violet-900 m-12 p-4 rounded">
      <h2 className="text-2xl font-bold">Codigos</h2>
        <div id="data">
          {data._embedded.entityModelList.map(codigos => <DataRow Codigos={codigos} />)}
        </div>
      </main>
    </>
  )
}