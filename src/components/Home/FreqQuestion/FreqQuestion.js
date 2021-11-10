import React from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
const FreqQuestion = () => {
    return (
        <div className="w-full px-4 pt-16 faq-main mb-4" style={{ 'background': '#f4ede7' }}>
            <div className="w-full max-w-md p-2  mx-auto bg-custom-light-choklet rounded-2xl">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-custom-deep-choklet bg-custom-light-choklet rounded-lg hover:bg-custom-deep-choklet hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-custom-deep-choklet focus-visible:ring-opacity-75">
                                <span className="font-customFont text-black hover:text-black text-lg">What is your refund policy?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'transform rotate-180' : ''
                                        } w-5 h-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                If you're unhappy with your purchase for any reason, email us
                                within 90 days and we'll refund you in full, no questions asked.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-custom-deep-choklet bg-custom-light-choklet rounded-lg hover:bg-custom-deep-choklet hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-custom-deep-choklet focus-visible:ring-opacity-75">
                                <span className="font-customFont text-black hover:text-black text-lg">What is your delivery process?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'transform rotate-180' : ''
                                        } w-5 h-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                we give deliver by redex Courier.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-custom-deep-choklet bg-custom-light-choklet rounded-lg hover:bg-custom-deep-choklet hover:text-black focus:outline-none focus-visible:ring focus-visible:ring-custom-deep-choklet focus-visible:ring-opacity-75">
                                <span className="font-customFont text-black hover:text-black text-lg">Do you offer technical support?</span>
                                <ChevronUpIcon
                                    className={`${open ? 'transform rotate-180' : ''
                                        } w-5 h-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                No...
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

            </div>
        </div>
    );
};

export default FreqQuestion;