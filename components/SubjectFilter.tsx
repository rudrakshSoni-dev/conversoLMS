'use client'
import { useState, useEffect } from 'react'
import { useParams, usePathname, useSearchParams, useRouter } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { formUrlQuery,removeKeysFromUrlQuery } from '@jsmastery/utils';

const SeacrhFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [subject,setSubject] = useState('');

  useEffect(()=>{
    let newUrl = "" ;
    if(subject === "all"){
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"]
      })
    }else{
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: subject,
      })
    }
    router.push(newUrl, {scroll:false});
  }, [subject])
  return (
    <Select onValueChange={setSubject} value={subject}>
            <SelectTrigger className="input capitalize">
                <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All subjects</SelectItem>
                {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject} className="capitalize">
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
  )
}

export default SeacrhFilter
