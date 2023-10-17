import { useState, createContext, useEffect, useContext } from 'react';
import axios from 'axios';
import { Product } from '../utils/product';
import { CartStore } from '../utils/cartStore';
import { Review } from '../utils/review';

type Sort = 'Asc' | 'Desc' | 'None';

interface SephoraContextInterface {
  sephoraProducts: Product[];
  cart: CartStore;
  isLoading: boolean;
  error: string;
  searchName: string;
  sort: Sort;
  reviews: Review[];
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
}

interface IProduct {
  id: string;
  attributes: {
    name: string;
    price: number;
    description: string;
    'image-urls': string[];
    'how-to-text': string;
  };
}

type Props = {
  children: React.ReactNode;
};

const SephoraContext = createContext<SephoraContextInterface | null>(null);

export const SephoraContextProvider: React.FC<Props> = ({ children }) => {
  const [sephoraProducts, setSephoraProducts] = useState<Product[]>([]);
  const [cart] = useState(new CartStore());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [searchName, setSearchName] = useState<string>('');
  const [sort, setSort] = useState<Sort>('None');
  const [reviews, setReviews] = useState<Review[]>([]);

  const getProducts = async () => {
    try {
      setIsLoading(true);

      const response = axios.create({
        baseURL: 'https://sephora.p.rapidapi.com',
        headers: {
          'X-RapidAPI-Key':
            'b3eeae41efmsha3beff71c30bd19p1a185cjsne67cf0e0b200',
          'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
        },
      });

      const results = await response.get('products/v2/list', { params: {} });

      const products = results.data.data.map((data: IProduct) => {
        const product = new Product({
          id: data.id,
          name: data.attributes.name,
          price: data.attributes.price,
          description: data.attributes.description,
          img: data.attributes?.['image-urls'],
          howtotext: data.attributes?.['how-to-text'],
        });

        return product;
      });

      setSephoraProducts(products);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);


  //-------------CONTEXT API-----------------

  return (
    <SephoraContext.Provider
      value={{
        sephoraProducts,
        cart,
        isLoading,
        error,
        searchName,
        sort,
        reviews,
        setSearchName,
        setSort,
        setReviews,
      }}
    >
      {children}
    </SephoraContext.Provider>
  );
};

export const useSephoraContext = () => {
  const context = useContext(SephoraContext);
  if (!context) throw new Error('unable to init Sephora context');
  return context;
};
