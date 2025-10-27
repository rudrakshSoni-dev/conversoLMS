
import CompanionForm from "@/components/CompanionForm"

function page() {
  return (
    <main className="min-lg:w-[1/3] min-md:w-2/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col">
         <p className="text-2xl font-bold text-center mb-6">Companion Builder</p>
         <CompanionForm />
      </article>
    </main>
  )
}

export default page
