"use client"

import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';

type Props = {
    title: string,
    state: string,
    filters: Array<string>,
    setState: (value: string) => void;
}


const CustomMenu = ({ title, state, filters, setState }: Props) => {

    
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    
    if(!isMounted) {
        return null
    }

    return(
    <div className="flex items-center justify-start flex-col w-full gap-7 relative">
        <label htmlFor={title} className="w-full text-gray-600">{title}</label>
        <Menu as="div" className="self-start relative">
            <div>
                <Menu.Button className=" flex justify-center items-center gap-4 w-full
                 rounded-md bg-gray-200 p-4 text-base outline-none capitalize">
                    {state || 'Category'}
                    <Image
                        src="/arrow-down.svg"
                        width={10}
                        height={5}
                        alt="arrow down"
                    />
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
                <Menu.Items className="flex items-center justify-start flex-col absolute left-0 mt-2
                 xs:min-w-[300px] w-fit max-h-64 origin-top-right rounded-xl bg-white border border-gray-600
                 shadow-menu overflow-y-auto">
                    {filters.map((tag) => (
                        <Menu.Item key={tag}>
                            <button
                                type="button"
                                value={tag}
                                className="text-left w-full px-5 py-2 text-sm hover:bg-gray-200
                                 self-start whitespace-nowrap capitalize"
                                onClick={(e) => setState(e.currentTarget.value)}
                            >
                                {tag}
                            </button>
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    </div>
)};

export default CustomMenu;