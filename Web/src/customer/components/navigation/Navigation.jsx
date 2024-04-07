import React from "react";
import navigationData from "./NavigationData";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {useNavigate} from "react-router-dom";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  // const jwt = localStorage.getItem("jwt");

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModel(true);
  };

  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  return (
    <div className="bg-white z-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigationData.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigationData.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigationData.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <button
                      onClick={handleOpen}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </button>
                  </div>
                  <div className="flow-root">
                    <button className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <button type="button" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className=" header_color flex h-10 items-center justify-center px-4 text-sm font-medium sm:px-6 lg:px-8">
          Glamify, Where Style Meets Convenience, One Click Away!
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-11">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <span className="sr-only">Glamify</span>
                <img
                  className="h-8 w-auto"
                  src="data:image/png;base64,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"
                  alt="ShopWithGlamify"
                />
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigationData.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>

                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <p
                                                  onClick={()=>
                                                  handleCategoryClick(
                                                    category,
                                                    section,
                                                    item,
                                                    close
                                                  )
                                                }
                                                  className="cursor-pointer hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigationData.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {true ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        sx={{
                          bgcolor: "#fff0f3",
                          color: "black",
                          cursor: "pointer",
                        }}
                      >
                        C
                      </Avatar>

                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem>
                        <MenuItem onClick={()=>navigate("/account/order")}>My Orders</MenuItem>
                        <MenuItem>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Sign In
                    </Button>
                  )}
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <p className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </p>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
