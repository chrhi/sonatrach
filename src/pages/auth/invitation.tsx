import { type NextPage } from "next";
import { type FormEvent, useState } from "react";
import Link from "next/link";
import {
  AbdullahButton,
  buttonVariants,
} from "~/components/used/AbdullahButton";
import { useRouter } from "next/router";
import { NotAuthHeader } from "~/components/header/NotAuthHeader";

const Page: NextPage = () => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
    confirmPassword: "",
    code: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      return;
    }
  };

  return (
    <>
      <NotAuthHeader />
      <main className=" custom-hieght-navbar flex w-full items-center justify-start bg-white pl-16  ">
        <div className="w-[50%] max-w-sm rounded-md border border-gray-200 bg-white p-4 shadow-xl  sm:p-6 md:p-8 ">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 ">
              Compte d'invitation{" "}
            </h5>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Votre e-mail
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Votre mot de passe
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                required
              />
            </div>
            <div>
              <label
                htmlFor="Confirmpassword"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                confirmer votre mot de passe
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                type="password"
                name="Confirmpassword"
                id="Confirmpassword"
                placeholder="••••••••"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                code d'invitation
              </label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, code: e.target.value })
                }
                type="text"
                name="code"
                id="code"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                placeholder="jdfhbhrnfbsjgdbfnshsmabsjs"
                required
              />
            </div>

            <AbdullahButton
              className={buttonVariants({ size: "lg", variant: "rukia" })}
              isLoading={false}
              onClick={(e: FormEvent) => handleSubmit(e)}
            >
              créer mon compte
            </AbdullahButton>
            <div className="text-sm font-medium text-gray-500 ">
              Vous avez un compte ?{" "}
              <Link href="/" className="text-orange-500 hover:underline ">
                connexion
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Page;
