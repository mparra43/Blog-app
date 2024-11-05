
import { getTags, getPost } from "@/feature/service";
import { Card, Dropdown, Layout } from "@/feature/transversal/components/Sections";
import { useEffect, useState } from "react";
import {  Tag, Tags } from "@/feature/transversal/types";
import useFilter from "@/feature/transversal/hooks/filters";



export const Home = () => {


  const [tags, setTags] = useState<Tags | null>(null)
  const {setData,  dataFilter, setDataFilter,  filtersUpdate } = useFilter('tags');

  const onFilter = (tag:Tag): void => {
    filtersUpdate(tag)
  }


  const getData = (): void => {
    getTags().then(({ tags }) => {setTags(tags); });
    getPost().then(({ posts }) => {setData(posts); setDataFilter(posts)});
  }

  useEffect(() => {
    getData();
  }, [])

  return <div>
    <Layout>
      <main className=' min-h-screen'>
        <p className='text-center text-5xl font-semibold my-10 text-gray-900'>
          Blog posts
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-[28%,70%] gap-4 px-10">
          <div className="w-full">
           {tags && <Dropdown  onFliter={onFilter} options={tags} />}
          </div>
          <div className="w-full bg-white border-gray-400 rounded-lg drop-shadow-2xl p-4">
            <div className="overflow-y-scroll h-[39rem] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 p-3 w-full mx-auto ">
              {dataFilter?.map(({ id, imagen, title, tags, user: { userName } },) => (
                <Card key={id} imagen={imagen} title={title} user={userName} tags={tags} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  </div>;
};
