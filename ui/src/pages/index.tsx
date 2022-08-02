import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';

import { QrcodeIcon, ChartSquareBarIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { PencilIcon } from '@heroicons/react/solid';

const urls = [
  {
    creator: 'Lindsay Walton',
    fullurl: 'my.example.com/somelong-url',
    shorturl: 'custom.com/abc',
    clicks: 1,
  },
  {
    creator: 'Lindsay Walton',
    fullurl: 'my.example.com/somelong-url-1234',
    shorturl: 'custom.com/abc123',
    clicks: 10,
  },
  {
    creator: 'Micheal Jordan',
    fullurl: 'my.example.com/somelong-url-a1b2c3',
    shorturl: 'default.com/123',
    clicks: 1,
  },
  {
    creator: 'Micheal Jordan',
    fullurl: 'my.example.com/somelong-url-99efs',
    shorturl: 'example.com/dks',
    clicks: 6,
  },
  {
    creator: 'Lindsay Walton',
    fullurl: 'my.example.com/somelong-url',
    shorturl: 'custom.com/fgdz',
    clicks: 1,
  },
  {
    creator: 'Lindsay Walton',
    fullurl: 'my.example.com/somelong-url-1234',
    shorturl: 'custom.com/a123',
    clicks: 10,
  },
  {
    creator: 'Micheal Jordan',
    fullurl: 'my.example.com/somelong-url-a1b2c3',
    shorturl: 'default.com/v123',
    clicks: 1,
  },
  {
    creator: 'Micheal Jordan',
    fullurl: 'my.example.com/somelong-url-99efs',
    shorturl: 'example.com/dkaseds',
    clicks: 6,
  },
  {
    creator: 'Lindsay Walton',
    fullurl: 'my.example.com/somelong-url',
    shorturl: 'custom.com/aghjxyz',
    clicks: 1,
  },
  {
    creator: 'Lindsay Walton',
    fullurl: 'my.example.com/somelong-url-1234',
    shorturl: 'custom.com/fgh',
    clicks: 10,
  },
  {
    creator: 'Micheal Jordan',
    fullurl: 'my.example.com/somelong-url-a1b2c3',
    shorturl: 'default.com/fghfg',
    clicks: 1,
  },
  {
    creator: 'Micheal Jordan',
    fullurl: 'my.example.com/somelong-url-99efs',
    shorturl: 'example.com/kasds',
    clicks: 6,
  },
  {
    creator: 'Lindsay Walton',
    fullurl: 'my.example.com/somelong-url',
    shorturl: 'custom.com/azhkj',
    clicks: 1,
  },
  {
    creator: 'Lindsay Walton',
    fullurl: 'my.example.com/somelong-url-1234',
    shorturl: 'custom.com/aasd3',
    clicks: 10,
  },
  {
    creator: 'Micheal Jordan',
    fullurl: 'my.example.com/somelong-url-a1b2c3',
    shorturl: 'default.com/bvn',
    clicks: 1,
  },
  {
    creator: 'Micheal Jordan',
    fullurl: 'my.example.com/somelong-url-99efs',
    shorturl: 'example.com/ksfd',
    clicks: 6,
  },
  {
    creator: 'Lindsay Walton',
    fullurl: 'my.example.com/somelong-url',
    shorturl: 'custom.com/abcxyz',
    clicks: 1,
  },
  {
    creator: 'Lindsay Walton',
    fullurl: 'my.example.com/somelong-url-1234',
    shorturl: 'custom.com/uio',
    clicks: 10,
  },
  {
    creator: 'Micheal Jordan',
    fullurl: 'my.example.com/somelong-url-a1b2c3',
    shorturl: 'default.com/sdf',
    clicks: 1,
  },
  {
    creator: 'Micheal Jordan',
    fullurl: 'my.example.com/somelong-url-99efs',
    shorturl: 'example.com/kfgh',
    clicks: 6,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Home: NextPageWithLayout = () => {
  return (
    <Layout>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-3xl font-bold leading-tight'>URLs</h1>
            <p className='mt-2 text-sm text-gray-700'>A list of all the you have created.</p>
          </div>
          <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
            >
              Create a short URL
            </button>
          </div>
        </div>
        <div className='mt-8 flex flex-col'>
          <div className='-my-2 -mx-4 sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle'>
              <div className='shadow-sm ring-1 ring-black ring-opacity-5'>
                <table className='min-w-full' style={{ borderSpacing: 0 }}>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th
                        scope='col'
                        className='sticky top-[65px] z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8'
                      >
                        Created By
                      </th>
                      <th
                        scope='col'
                        className='sticky top-[65px] z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'
                      >
                        Long URL
                      </th>
                      <th
                        scope='col'
                        className='sticky top-[65px] z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell'
                      >
                        Short URL
                      </th>
                      <th
                        scope='col'
                        className='sticky top-[65px] z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter'
                      >
                        Clicks
                      </th>
                      <th
                        scope='col'
                        className='sticky top-[65px] z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8'
                      >
                        <span className='sr-only'>Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white'>
                    {urls.map((url, urlIdx) => (
                      <tr key={url.shorturl} className='border-b border-gray-200'>
                        <td
                          className={classNames(
                            urlIdx !== urls.length - 1 ? '' : '',
                            'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                          )}
                        >
                          {url.creator}
                        </td>
                        <td
                          className={classNames(
                            urlIdx !== urls.length - 1 ? '' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell'
                          )}
                        >
                          {url.fullurl}
                        </td>
                        <td
                          className={classNames(
                            urlIdx !== urls.length - 1 ? '' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell'
                          )}
                        >
                          {url.shorturl}
                        </td>
                        <td
                          className={classNames(
                            urlIdx !== urls.length - 1 ? '' : '',
                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                          )}
                        >
                          {url.clicks}
                        </td>
                        <td
                          className={classNames(
                            urlIdx !== urls.length - 1 ? '' : '',
                            'relative flex whitespace-nowrap text-right text-sm py-4 font-medium space-between'
                          )}
                        >
                          <QrcodeIcon className='mr-2 w-5 h-5' />
                          <ChartSquareBarIcon className='mr-2 w-5 h-5' />
                          <PencilIcon className='mr-2 w-5 h-5' />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
