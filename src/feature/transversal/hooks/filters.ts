import { useState, useEffect } from 'react';
import { Option, Options } from '@/feature/transversal/types';

export interface DataItem {
    [key: string]: any;
}

const useFilter = (property: keyof DataItem) => {
    const [data, setData] = useState<DataItem[]>([]);
    const [dataFilter, setDataFilter] = useState<DataItem[]>([]);
    const [filters, setFilters] = useState<Options>([]);


    const filtersUpdate = (option: Option) => {
        if (filters.find(filter => option.id === filter.id)) {
            const filtersUpdate = filters.filter(filter => filter.id !== option.id);
            setFilters(filtersUpdate)
        }
        else {
            setFilters([...filters, option])
        }
    }

    useEffect(() => {
        if (filters.length === 0) return setDataFilter(data);

        const filtered = data.filter(item =>
            item[property]?.some(({ name }: Option) => filters.some(filter => filter.name === name))
        );

        setDataFilter(filtered);
    }, [data, filters, property]);

    return {
        dataFilter,
        setDataFilter,
        data,
        setData,
        filters,
        filtersUpdate
    };
};

export default useFilter;