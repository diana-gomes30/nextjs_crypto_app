import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

interface NumPerPageOptionProps {
  onClick: (value: number) => void;
  numPerPage: number;
}

export const NumPerPageOption = ({
  onClick,
  numPerPage,
}: NumPerPageOptionProps) => {
  const [value, setValue] = useState(numPerPage);

  useEffect(() => {
    onClick(value);
  }, [value]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          data-testid="num-per-page-button"
          className="inline-flex w-11 justify-center rounded-md bg-light px-4 py-2 text-sm font-medium text-first-dark-blue hover:bg-third-dark-blue hover:text-light focus:outline-none focus-visible:ring-2 focus-visible:ring-light focus-visible:ring-opacity-75"
        >
          {value}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-2 w-11 origin-top-right divide-y divide-light rounded-md bg-light shadow-lg ring-1 ring-light ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setValue(15)}
                  className={`${
                    active
                      ? 'bg-third-dark-blue text-light'
                      : 'text-first-dark-blue'
                  } group flex w-full justify-center items-center rounded-md px-2 py-2 text-sm`}
                >
                  15
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setValue(30)}
                  className={`${
                    active
                      ? 'bg-third-dark-blue text-light'
                      : 'text-first-dark-blue'
                  } group flex w-full justify-center items-center rounded-md px-2 py-2 text-sm`}
                >
                  30
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setValue(50)}
                  className={`${
                    active
                      ? 'bg-third-dark-blue text-light'
                      : 'text-first-dark-blue'
                  } group flex w-full justify-center items-center rounded-md px-2 py-2 text-sm`}
                >
                  50
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setValue(100)}
                  className={`${
                    active
                      ? 'bg-third-dark-blue text-light'
                      : 'text-first-dark-blue'
                  } group flex w-full justify-center items-center rounded-md px-2 py-2 text-sm`}
                >
                  100
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setValue(150)}
                  className={`${
                    active
                      ? 'bg-third-dark-blue text-light'
                      : 'text-first-dark-blue'
                  } group flex w-full justify-center items-center rounded-md px-2 py-2 text-sm`}
                >
                  150
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
