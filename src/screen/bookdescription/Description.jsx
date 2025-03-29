import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { discoveryData } from "../../components/discovery/data";
import { formatCurrency } from "../../static/currencyConverter/format";
import { ICONS } from "../../static/icons/icons";

const Description = () => {
  const { id } = useParams();
  const [active, setActive] = useState(1);
  const data = discoveryData.find((i) => i.id === Number(id));

  return (
    <React.Fragment>
      <div className="bg-[#000] md:py-10 py-6 text-center text-white">
        <h3 className="md:text-5xl text-3xl">Book Details</h3>
      </div>
      <div className="md:max-w-7xl md:mx-auto my-10 md:my-16 mx-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="col-span-1">
            <div className="w-full h-[500px]">
              <img
                src={data.image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="col-span-2 newsreader md:w-[75%] w-full">
            <div className="flex flex-col">
              <h3 className="md:text-4xl text-2xl text-[#484C53] font-[600] leading-8">
                {data.title}
              </h3>
              <h3 className="text-base font-[400] py-2">
                <span>Author:</span> {data.author}
              </h3>
              <div className="flex justify-between items-center pt-3">
                <h2 className="text-xl font-bold leading-8">
                  {formatCurrency(parseInt(data.price))}
                </h2>
                <div className="flex space-x-1">
                  <ICONS.star color="#CC302B" />
                  <ICONS.star color="#CC302B" />
                  <ICONS.star color="#CC302B" />
                  <ICONS.star color="#CC302B" />
                  <ICONS.star color="#CC302B" />
                </div>
              </div>
              <div className="my-6">
                <p className="md:text-base text-sm leading-8 text-neutral-500">
                  Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit
                  odit aut fugit, sed quia consequuntur. Lorem ipsum dolor.
                  Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-base">
                  <span className="text-gray-500 font-[500]">
                    Year of Publishing:
                  </span>{" "}
                  <span className="pl-2">{data.yearOfPublishing}</span>
                </h3>
                <h3 className="text-base">
                  <span className="text-gray-500 font-[500]">
                    Number of Pages:
                  </span>{" "}
                  <span className="pl-2">{data.numberOfPages}</span>
                </h3>
                <h3 className="text-base">
                  <span className="text-gray-500 font-[500]">ISBN:</span>{" "}
                  <span className="pl-2">{data.isbn}</span>
                </h3>
                <h3 className="text-base">
                  <span className="text-gray-500 font-[500]">Categories:</span>{" "}
                  <span className="pl-2">
                    {data.categories.map((item) => item)}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <div
            className="flex items-center text-[#9999] font-ebgaramond md:text-base text-sm
               font-medium cursor-pointer md:space-x-8 space-x-7 justify-center border-y-[1px] border-x-0"
          >
            <h3
              className={`${
                active === 1 &&
                "text-[#B10C62] border-y-2 py-3 border-x-0 border-[#B10C62]"
              }`}
              onClick={() => setActive(1)}
            >
              Description
            </h3>
            <h3
              className={`${
                active === 2 &&
                "text-[#B10C62] border-y-2 py-3 border-x-0 border-[#B10C62]"
              }`}
              onClick={() => setActive(2)}
            >
              Additional Information
            </h3>
          </div>
          <div className="mt-3">
            {active === 1 && (
              <div className="my-6">
                <p className="leading-10 md:text-base text-sm font-normal">
                  {data.description}
                </p>
              </div>
            )}
            {active === 2 && (
              <div className="md:p-4 p-1 newsreader">
                <table className="md:min-w-full !w-full border-[1px]">
                  <tbody>
                    <tr className="bg-white divide-x-2">
                      <td className="md:px-6 px-2 md:py-4 py-1 whitespace-nowrap text-sm font-normal md:font-medium text-gray-900">
                        Format
                      </td>
                      <td className="md:px-6 px-3 md:py-4 py-1 whitespace-nowrap font-semibold text-base text-gray-500">
                        {data.format}
                      </td>
                    </tr>

                    <tr className=" border-t divide-x-2">
                      <td className="md:py-4 py-1 md:px-6 px-2 whitespace-nowrap text-sm font-normal md:font-medium text-gray-900">
                        Language
                      </td>
                      <td className="md:py-4 py-1 md:px-6 px-3 whitespace-nowrap font-semibold text-base text-gray-500">
                        {data.language}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Description;
