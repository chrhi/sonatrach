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
              title="Risk Management Plan"
              color=""
              description="this is the project charter"
              phase="Inisiating"
            />
             <GeneraleBuilder 
              title="Risk Register"
              color=""
              description="this is the project charter"
              phase="Inisiating"
            />
             <GeneraleBuilder 
              title="Probability and Impact Matrix"
              color=""
              description="this is the project charter"
              phase="Inisiating"
            />

            <GeneraleBuilder 
              title="Risk Audit"
              color=""
              description="this is the project charter"
              phase="Inisiating"
            />
             <GeneraleBuilder 
              title="Risk Data Sheet"
              color=""
              description="this is the project charter"
              phase="Inisiating"
            />
                   
       </div>
      </main>
    </>
  );
};

export default Page;