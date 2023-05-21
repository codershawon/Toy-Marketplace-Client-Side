import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DcSuperHeroes from "./DcSuperHeroes";
import MarvelSuperHeroes from './MarvelSuperHeroes';
import Transformers from "./Transformers";

const ShopByCategory = () => {
  const [superHeroes, setSuperHeroes] = useState([]);
  const marvelSuperHeroes=superHeroes.filter((item)=>item.subCategory==="Marvel")
  const dcSuperHeroes=superHeroes.filter((item)=>item.subCategory==="DC")
  const transformers=superHeroes.filter((item)=>item.subCategory==="Transformers")
  console.log(marvelSuperHeroes)
  useEffect(() => {
    fetch(`http://localhost:5000/newToySuperHero`)
      .then((res) => res.json())
      .then((data) => setSuperHeroes(data));
  }, []);

  return (
    <div className="text-center mt-10 mb-5">
      <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
      <Tabs>
        <TabList>
          <Tab>Marvel Toys</Tab>
          <Tab>DC Toys</Tab>
          <Tab>Transformers Toys</Tab>
        </TabList>

        <TabPanel>
          <h3 className="text-3xl font-semibold mb-8">Marvel Toys</h3>
          <div className="grid grid-cols-2 w-[1300px] mx-auto gap-5 ">
            {marvelSuperHeroes &&
              marvelSuperHeroes.map((marvelSuperHero) => (
                <MarvelSuperHeroes key={marvelSuperHero.id}
                  marvelSuperHero={marvelSuperHero}
                ></MarvelSuperHeroes>
              ))}
           
          </div>
        </TabPanel>

        <TabPanel>
          <h3 className="text-3xl font-semibold mb-8">DC Toys</h3>
         
          <div className="grid grid-cols-2 w-[1300px] mx-auto gap-5 ">
            {dcSuperHeroes &&
              dcSuperHeroes.map((dcSuperHero) => (
                <DcSuperHeroes key={dcSuperHero.id}  dcSuperHero={dcSuperHero}>

                </DcSuperHeroes>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h3  className="text-3xl font-semibold mb-8">Transformers Toys</h3>
          <div className="grid grid-cols-2 w-[1300px] mx-auto gap-5 ">
            {transformers &&
              transformers.map((transformer) => (
                <Transformers key={transformer.id} transformer={transformer}></Transformers>
              ))}
          </div>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default ShopByCategory;
