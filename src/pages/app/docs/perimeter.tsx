import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/header/Header";
import DocsSideBar from "~/components/docsComponents/DocsSideBar";
import { GeneraleBuilder } from "~/components/docsComponents/generale-builder";


const Page: NextPage = () => {
  
 
  return (
    <>
      <Head>
      <title>ProjectFlow</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <main className=" custopn-page-height flex w-full justify-center items-center container  bg-white ">
        <DocsSideBar  />
       <div
        className="ml-[20rem] w-[80%]  grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 h-full gap-4 pt-8 pb-8 "
       >
           <GeneraleBuilder 
              title="Énoncé du périmètre du projet"
              color=""
              description="Un document détaillant la portée, les objectifs et les livrables du projet"
              phase="Inisiating"
            />
             <GeneraleBuilder 
              title="Documentation des exigences"
              color=""
              description="Une liste complète des exigences fonctionnelles et non fonctionnelles du projet"
              phase="Inisiating"
            />
             <GeneraleBuilder 
              title="Dictionnaire de la structure de découpage du projet (WBS)"
              color=""
              description="Un document qui définit chaque élément de la structure de découpage du projet (WBS) avec des descriptions détaillées"
              phase="Inisiating"
            />
            <GeneraleBuilder 
              title="Plan de gestion du périmètre"
              color=""
              description="Un document détaillant comment la portée du projet sera définie, validée et contrôlée"
              phase="Inisiating"
            />
             <GeneraleBuilder 
              title="Registre des hypothèses et contraintes"
              color=""
              description="Un document qui enregistre les hypothèses faites et les contraintes identifiées pour le projet"
              phase="Inisiating"
            />
              <GeneraleBuilder 
              title=" Matrice de traçabilité des exigences"
              color=""
              description=" Un outil qui permet de suivre et de vérifier la relation entre les exigences et les livrables du projet"
              phase="Inisiating"
            />
              <GeneraleBuilder 
              title="Structure de découpage des ressources"
              color=""
              description="Une structure hiérarchique qui décompose les ressources nécessaires pour exécuter le projet"
              phase="Inisiating"
            />
            
       </div>
      </main>
    </>
  );
};

export default Page;