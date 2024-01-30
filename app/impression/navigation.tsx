import { impressCategories } from "@/constants";
import { ImpressCategoryProps } from "@/types";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation: ImpressCategoryProps[] = impressCategories;

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

interface NavigationProps {
  setSelectedMenuItem: (item: ImpressCategoryProps) => void;
}

const Navigation: React.FC<NavigationProps> = ({ setSelectedMenuItem }) => {
  const [selectedMenu, setSelectedMenu] = useState<ImpressCategoryProps>(
    navigation[0]
  );
  const handleMenuItemChange = (item: ImpressCategoryProps) => {
    setSelectedMenuItem(item);
    setSelectedMenu(item);
  };
  return (
    <Disclosure as="nav" className="navigation sticky top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[87.3rem]">
            <div className="relative flex h-10 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center  p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center h-full  navigation-container">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        onClick={() => handleMenuItemChange(item)}
                        key={item.libelle}
                        href={"#"}
                        className={classNames(
                          item === selectedMenu ? "active" : "",
                          "rounded-md px-3 py-2 text-sm font-medium menu-text h-10"
                        )}
                      >
                        {item.libelle}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  onClick={() => handleMenuItemChange(item)}
                  key={item.libelle}
                  as="a"
                  href={"#"}
                  className={classNames(
                    item === selectedMenu
                      ? "bg-gray-900 text-white"
                      : "text-black hover:bg-gray-700 hover:text-white",
                    "block  px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.libelle}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Navigation;
