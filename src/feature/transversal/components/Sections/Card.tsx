import { Tags } from '@/feature/transversal/types';

interface CardProps {
  title?: string;
  imagen?: string
  user: string
  tags?: Tags
}

export const Card = ({ title, imagen, user, tags }: CardProps) => {
  return (
    <a href="#" className="w-full flex flex-col items-center bg-white border border-gray-100 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-teal-400 dark:bg-slate-50 dark:hover:bg-teal-200">
      {imagen && <img className="object-cover  rounded-t-lg h-44 xl:h-full w-full xl:w-4/12 md:rounded-none md:rounded-s-lg" src={imagen} alt="" />}
      <div className="w-full xl:w-8/12 flex flex-col justify-between p-4 leading-normal">
        {title && <h5 className="mb-2 text-base lg:text-lg xl:text-2xl font-bold tracking-tight text-gray-200 dark:text-teal-500">{title}</h5>}
        <div className="flex items-center gap-4">
          <i className="text-4xl text-gray-600 circle-user" />
          <div className="font-medium dark:text-gray-800">
            <div>{user}</div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          {tags?.map(({id, name}) => (
            <p className="text-sm text-gray-600 dark:text-gray-500" key={id}>#{name}</p>
          ))}
        </div>
      </div>
    </a>
  );
};
