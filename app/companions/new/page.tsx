
import CompanionForm from "@/components/CompanionForm"
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

async function page() {
 const { userId } = await auth();
 if(!userId) redirect('/sign-in');
 const canCreateComponent = await newCompanionPermissions();
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      {canCreateComponent ? (<article className="w-full gap-4 flex flex-col">
         <p className="text-2xl font-bold text-center mb-6">Companion Builder</p>
         <CompanionForm />
      </article>
    ) :(
      <article className="companion-limit">
        <Image src="/images/limit.svg" alt="Companion limit reached" width={360} height={230} />
        <div className="upgrade your plan">
          Upgrade your plan
        </div>
        <h1>
          You've reached your limit.
        </h1>
        <p>
          You've reached your companion limit. Upgrade to create more companions and access premium features.
        </p>
        <Link href="/subscription" className="btn-primary justify-center w-full ">Upgrade My Plan</Link>
      </article>
    ) }
  </main>
  )
}

export default page
