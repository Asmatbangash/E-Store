"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { usePathname } from "next/navigation"; // ✅ for isActive

const navigation = [
  { name: "Home", href: "/" },
  { name: "Store", href: "/store" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const cartCount = 11112;
  const pathname = usePathname(); // ✅ current path

  return (
    <Disclosure
      as="nav"
      className="bg-white shadow-sm px-30 max-sm:px-4 max-md:px-8"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Left section: Logo + Search */}
              <div className="flex justify-between items-center space-x-4 flex-1">
                {/* Logo */}
                <div className="flex shrink-0 items-center text-2xl font-extrabold">
                  <h1 className="text-[#ff3700]">E-Store</h1>
                  <span>.</span>
                </div>

                {/* Search bar (desktop only) */}
                <div className="hidden sm:flex flex-1 max-w-md mx-4">
                  <div className="relative w-full">
                    <input
                      placeholder="Search..."
                      className="w-full border border-gray-300 ps-4 pe-8 py-2 rounded-full transition-all focus:outline-none focus:border-indigo-500"
                      name="search"
                      type="search"
                    />
                    <svg
                      className="w-6 h-6 absolute top-2.5 right-2 text-gray-500"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right section: Desktop Nav + Cart */}
              <div className="hidden sm:flex space-x-4 items-center">
                {navigation.map((item) => {
                  const isActive = pathname === item.href; // ✅ check active
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={classNames(
                        isActive
                          ? "text-[#ff3700] font-semibold border-b-2 border-[#ff3700]"
                          : "text-black hover:text-[#ff3700]",
                        "rounded-md px-3 py-2 text-sm transition-colors duration-300"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* Cart Button */}
                <button
                  className="relative w-14 h-14 rounded-full flex justify-center items-center transition-all duration-300 ease-out group hover:scale-105 active:scale-95"
                  aria-label="Open Shopping Cart"
                >
                  <CiShoppingCart className="text-3xl text-[#ff3700]" />
                  <div className="absolute -right-2 -top-0 z-10">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute inline-flex h-6 w-6 animate-ping rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex min-w-[24px] max-w-[40px] truncate h-6 px-1 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                        {cartCount > 99 ? "99+" : cartCount}
                      </span>
                    </div>
                  </div>
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-indigo-600 focus:outline-2 focus:outline-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-2 px-4 pt-2 pb-3">
              {/* Search bar inside mobile menu */}
              <div className="flex-1">
                <div className="relative w-full">
                  <input
                    placeholder="Search..."
                    className="w-full shadow-sm border border-gray-300 ps-4 pe-8 py-2 rounded-full transition-all focus:outline-none focus:border-indigo-500"
                    name="search"
                    type="search"
                  />
                  <svg
                    className="w-5 h-5 absolute top-2.5 right-3 text-gray-500"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
              </div>

              {navigation.map((item) => {
                const isActive = pathname === item.href; // ✅ for mobile
                return (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={classNames(
                      isActive
                        ? "text-[#ff3700] font-semibold border-l-4 border-[#ff3700] pl-2"
                        : "text-gray-700 hover:text-[#ff3700]",
                      "block rounded-md px-3 py-2 text-base transition-colors duration-300"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                );
              })}

              {/* Mobile Cart Button */}
              <div className="flex justify-start px-3">
                <button
                  className="relative w-12 h-12 rounded-full flex justify-center items-center transition-all duration-300 ease-out group hover:scale-105 active:scale-95"
                  aria-label="Open Shopping Cart"
                >
                  <CiShoppingCart className="text-2xl text-[#ff3700]" />
                  <div className="absolute -right-2 -top-2 z-10">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex min-w-[20px] max-w-[40px] truncate h-5 px-1 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                        {cartCount > 99 ? "99+" : cartCount}
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
