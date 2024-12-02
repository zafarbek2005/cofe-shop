import React from 'react';
import bg from './bg.svg';

const menuData = [
  {
    title: 'COFFEE',
    items: ['Espresso', 'Cappuccino', 'Latte', 'Americano', 'Mocha'],
  },
  {
    title: 'TEA',
    items: ['Green Tea', 'Black Tea', 'Herbal Tea', 'Chai', 'Oolong'],
  },
  {
    title: 'SMOOTHIES',
    items: ['Berry Blast', 'Mango Tango', 'Green Power', 'Tropical Punch', 'Strawberry Dream'],
  },
  {
    title: 'PASTRIES',
    items: ['Croissant', 'Muffin', 'Scone', 'Donut', 'Bagel'],
  },
];

const MenuSection = ({ title, items }) => (
  <div className="w-full max-w-[476px]">
    <div className="border-t border-black w-full"></div>
    <h3 className="text-4xl text-[#100502] font-semibold mt-4 mb-6">{title}</h3>
    <div className="border-t border-black w-full border-dotted mb-8"></div>
    {items.map((item, index) => (
      <div key={index} className="flex gap-[20px] md:gap-[120px] items-center py-4 flex-col md:flex-row">
        <div>
          <h4 className="text-xl font-medium text-[#1F0C0C] mb-1">{item}</h4>
          <p className="text-sm text-[#1F0C0C] opacity-80 font-praise">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="text-lg font-medium">£2.20</div>
      </div>
    ))}
  </div>
);

export const Menu = () => {
  return (
    <>
      <div
        className="container mx-auto max-w-full"
        style={{
          background: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
        }}
      >
        <h3 className="container mx-auto max-w-[372px] w-full font-bold leading-[96px] text-center text-6xl text-[#752900] pt-[138px]">
          MENUS
        </h3>

        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-[150px] flex-wrap justify-center mt-8 px-4">
          {menuData.map((section, index) => (
            <MenuSection key={index} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
    </>
  );
};
