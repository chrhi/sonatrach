import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Header } from "~/components/header/Header";
import { CloseSideBar } from "~/components/sideBars/CloseSideBar";
import { AbdullahTable } from "~/components/used/AbdullahTable";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { FormHead } from "~/components/used/FormHead";
import { RowGridText } from "~/components/typography/RowGridText";
import { TextField } from "~/components/used/TextField";
import { Input } from "~/components/used/Input";
import { PLusButtonStakHolder } from "~/components/popup/PLusButtonStakHolder";
import { RisksAndIssues } from "~/components/popup/close-phases/RisksAndIssues";
import { QualityDefectsAdd } from "~/components/popup/close-phases/QualityDefects";
import { RisksAndIssuesAdd } from "~/components/popup/close-phases/VendorManagement";
import { OtherAdd } from "~/components/popup/close-phases/OtherAdd";

const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)
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
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
       <CloseSideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[5rem]"}`}>
     
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
         
          
            <RowGridText text="Lessons learned" />

            

            <RowGridText text="Project Performance Analysis" />
                <Input
                  isLoading={false}
                  lable="What Worked Well"
                  onChange={(e) => console.log(e)}
                  value={""}
                />
                <Input
                  isLoading={false}
                  lable="What Can Be Improved"
                  onChange={(e) => console.log(e)}
                  value={""}
               />


             <RowGridText text="Scope definition and management" />
                <Input
                  isLoading={false}
                  lable="What Worked Well"
                  onChange={(e) => console.log(e)}
                  value={""}
                />
                <Input
                  isLoading={false}
                  lable="What Can Be Improved"
                  onChange={(e) => console.log(e)}
                  value={""}
               />
             <RowGridText text="Schedule development and control" />
                <Input
                  isLoading={false}
                  lable="What Worked Well"
                  onChange={(e) => console.log(e)}
                  value={""}
                />
                <Input
                  isLoading={false}
                  lable="Cost estimating and control"
                  onChange={(e) => console.log(e)}
                  value={""}
               />
               <RowGridText text="Quality planning and control" />
                <Input
                  isLoading={false}
                  lable="What Worked Well"
                  onChange={(e) => console.log(e)}
                  value={""}
                />
                <Input
                  isLoading={false}
                  lable="What Can Be Improved"
                  onChange={(e) => console.log(e)}
                  value={""}
               />
              <RowGridText text="Stakeholder management " />
                <Input
                  isLoading={false}
                  lable="What Worked Well"
                  onChange={(e) => console.log(e)}
                  value={""}
                />
                <Input
                  isLoading={false}
                  lable="What Can Be Improved"
                  onChange={(e) => console.log(e)}
                  value={""}
               />
                <RowGridText text="Human resource availability, team development, and performance " />
                <Input
                  isLoading={false}
                  lable="What Worked Well"
                  onChange={(e) => console.log(e)}
                  value={""}
                />
                <Input
                  isLoading={false}
                  lable="What Can Be Improved"
                  onChange={(e) => console.log(e)}
                  value={""}
               />
                 <RowGridText text="Communication management " />
                <Input
                  isLoading={false}
                  lable="What Worked Well"
                  onChange={(e) => console.log(e)}
                  value={""}
                />
                <Input
                  isLoading={false}
                  lable="What Can Be Improved"
                  onChange={(e) => console.log(e)}
                  value={""}
               />
                 <RowGridText text="Reporting" small/>
                <Input
                  isLoading={false}
                  lable="What Worked Well"
                  onChange={(e) => console.log(e)}
                  value={""}
                />
                <Input
                  isLoading={false}
                  lable="What Can Be Improved"
                  onChange={(e) => console.log(e)}
                  value={""}
               />
                 <RowGridText text="Risk management" />
                <Input
                  isLoading={false}
                  lable="What Worked Well"
                  onChange={(e) => console.log(e)}
                  value={""}
                />
                <Input
                  isLoading={false}
                  lable="What Can Be Improved"
                  onChange={(e) => console.log(e)}
                  value={""}
               />
                 <RowGridText text="Procurement planning and management" />
                <Input
                  isLoading={false}
                  lable="What Worked Well"
                  onChange={(e) => console.log(e)}
                  value={""}
                />
                <Input
                  isLoading={false}
                  lable="What Can Be Improved"
                  onChange={(e) => console.log(e)}
                  value={""}
               />
                 <RowGridText text="Process improvement information" />
                <Input
                  isLoading={false}
                  lable="What Worked Well"
                  onChange={(e) => console.log(e)}
                  value={""}
                />
                <Input
                  isLoading={false}
                  lable="What Can Be Improved"
                  onChange={(e) => console.log(e)}
                  value={""}
               />
                 <RowGridText text="Product specific information" />
                <Input
                  isLoading={false}
                  lable="What Worked Well"
                  onChange={(e) => console.log(e)}
                  value={""}
                />
                <Input
                  isLoading={false}
                  lable="Other"
                  onChange={(e) => console.log(e)}
                  value={""}
               />
                 <RowGridText text="Project Performance Analysis" />
                <Input
                  isLoading={false}
                  lable="What Worked Well"
                  onChange={(e) => console.log(e)}
                  value={""}
                />
                <Input
                  isLoading={false}
                  lable="What Can Be Improved"
                  onChange={(e) => console.log(e)}
                  value={""}
               />

             <RowGridText text="Risks and Issues" />
               <div className="col-span-6 lg:col-span-12 ">
                 <AbdullahTable
                  
              
                   headers={["Risk or Issue Description" , "Response" , "Comments" ]}
                   body={[]}
                   PlusButton={<RisksAndIssues  />}
                  />
               </div> 
               <RowGridText text="Quality Defects" />
               <div className="col-span-6 lg:col-span-12 ">
                 <AbdullahTable
             
              
                   headers={["Defect Description" , "Resolution" , "Comments" ]}
                   body={[]}
                   // PlusButton={<PLusButtonStakHolder refetch={refetch} />}
                   PlusButton={<QualityDefectsAdd />}
                  />
               </div> 

               <RowGridText text="Vendor Management" />
               <div className="col-span-6 lg:col-span-12 ">
                 <AbdullahTable
                  
              
                   headers={["Vendor" , "Issue" , "Resolution" , "Comments" ]}
                   body={[]}
                   PlusButton={<RisksAndIssuesAdd  />}
                  />
               </div> 
               <RowGridText text="Other " />
               <div className="col-span-6 lg:col-span-12 ">
                 <AbdullahTable
                
              
                   headers={["Areas of Exceptional Performance" , "Areas for Improvement"  ]}
                   body={[]}
                   PlusButton={<OtherAdd  />}
                  />
               </div> 















          
        </div>
      </div>
   
       </Form>
  </FormContainer>
      </main>
    </>
  );
};

export default Page;