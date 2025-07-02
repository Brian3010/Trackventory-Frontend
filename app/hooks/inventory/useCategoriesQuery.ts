import { Category } from '@/app/types/inventory';
import axiosNet from '@/app/utils/axiosNet';
import { useQuery } from '@tanstack/react-query';

export const useCategoriesQuery = () => {
  const categories = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await axiosNet('/api/Inventory/categories');
      return res.data;
    },
  });

  return categories;
};
