"use client"

import { create } from "@/actions/codigos";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormCodigos(){
    const [erro, setErro] = useState("")

    async function onCreate(formData){
        const resp = await create(formData)
        if (resp.message === "ok"){
            redirect("/codigos")
            return
        }
        setErro(resp.message)
    }

    return (
        <>
            <NavBar active={"codigos"} />

            <main className=" bg-violet-900 mt-10 m-auto max-w-lg p-2 rounded">
                <h2 className="text-2xl font-bold">Adicionar Código</h2>

                <form action={onCreate} className="p-4">
                    <InputText name="codigo" label="codigo" id="codigo"/>
                

                    <div className="flex justify-around mt-4">
                        <Button href="/codigos" variant="secundary">cancelar</Button>
                        <Button type="button">salvar</Button>
                    </div>
                    <p className="text-red-500">{erro}</p>
                </form>
            </main>
        </>

    )
}