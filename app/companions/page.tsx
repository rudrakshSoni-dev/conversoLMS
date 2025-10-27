import CompanionCard from '@/components/CompanionCard';
import { getAllCompanions } from '@/lib/actions/companion.actions';
import { SearchParams } from '@/types';
import React from 'react'
import { getSubjectColor } from '@/lib/utils';
import SearchInput from '@/components/SearchInput';
import SearchFilter from '@/components/SubjectFilter';

const page = async ({searchParams}: SearchParams) => {
  const filters = await searchParams ;
  const subject = filters.subject ? filters.subject : '' ;
  const topic = filters.topic ? filters.topic : '' ;
  console.log(filters);
  const companions = await getAllCompanions({ subject, topic });

  return (
    <main>
      <section className='flex justify-between gap-4 max-sm:flex-col'>
        <h1>Companions Library</h1>
        <div className='flex gap-4'>
          <SearchInput />
          <SearchFilter />
        </div>
      </section>
            <section className="companions-grid">
                {companions.map((companion) => (
                    <CompanionCard
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                ))}
            </section>
    </main>
  )
}

export default page
