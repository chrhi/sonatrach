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
              title="Feuille de calcul d'estimation des coûts détaillée"
              color=""
              description="Un document détaillant les coûts de chaque composant ou activité du projet, calculés à partir des estimations des ressources et des quantités."
              phase="Inisiating"
            />
             <GeneraleBuilder 
              title="Plan de gestion des coûts"
              color=""
              description=" Un document détaillant la manière dont les coûts du projet seront planifiés, estimés, budgétisés et contrôlés"
              phase="Inisiating"
            />
             <GeneraleBuilder 
              title="Ligne de base des coûts"
              color=""
              description="La version approuvée du budget du projet, servant de référence pour la mesure et le contrôle ultérieurs des coûts"
              phase="Inisiating"
            />
            <GeneraleBuilder 
              title="Estimations des coûts d'activité"
              color=""
              description="Les estimations des coûts associées à chaque activité du projet."
              phase="Inisiating"
            />
             <GeneraleBuilder 
              title="Feuille de travail d'estimation des coûts"
              color=""
              description="Un document qui contient les détails et les calculs des estimations de coûts pour les différentes activités du projet."
              phase="Inisiating"
            />
              <GeneraleBuilder 
              title="Rapport d'état de la valeur acquise (Earned Value)"
              color=""
              description=" Un rapport qui compare l'état actuel du projet en termes de coûts, de planning et de performance avec le plan initial."
              phase="Inisiating"
            />
              <GeneraleBuilder 
              title="Analyse des écarts"
              color=""
              description="Une évaluation des différences entre les coûts réels et les coûts prévus, ainsi que les raisons de ces écarts."
              phase="Inisiating"
            />
           
       </div>
      </main>
    </>
  );
};

export default Page;