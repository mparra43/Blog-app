import {  getUsers } from "@/feature/service";
import {  Card, Layout } from "@/feature/transversal/components/Sections";
import { useEffect, useState } from "react";

import { User } from "@/feature/users/types/user";




export const HomeLoggedIn = () => {


  const [users, setUsers] = useState<User[] | null>(null)
  


  const getData = (): void => {
    getUsers().then(({ users }) => {setUsers(users); });
   
  }

  useEffect(() => {
    getData();
  }, [])

  return <div>
    <Layout showLogin={false}>
      <main className=' min-h-screen'>
        <p className='text-center text-5xl font-semibold my-10 text-gray-900'>
         Lista de usuarios 
        </p>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-10 overflow-y-scroll h-[39rem] bg-white border-gray-400 rounded-lg drop-shadow-2xl">
        {users?.map(({id, firstName, lastName })=>( <Card key={id}   user={`${firstName} ${lastName}`}  />))}
        </div>
      </main>
    </Layout>
  </div>;
};