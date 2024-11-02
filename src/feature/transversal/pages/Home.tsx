import { getTags } from "@/feature/service";
import { Layout } from "@/feature/transversal/components/Sections";
import { useEffect } from "react";


export const Home = () => {

const getTagsPost= (): void => {
  getTags().then((tags:any) => console.log(tags));

}

  useEffect(() => {
    getTagsPost();
  }, [])

  return <div>
    <Layout>
      <main className=' min-h-screen'>

      <p className='text-center text-5xl font-semibold my-10 text-gray-900'>
       Blog posts
      </p>
     
      
     

      </main>
    </Layout>
  </div>;
};
