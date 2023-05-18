import { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import useFruitStore from "../../hooks/fruitStore";
import Image from "next/image";

export default function StatePages() {
  const { data, isLoading, fetchData, clearData } = useFruitStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (item) => {
    setExpandedItem((prevItem) => (prevItem === item ? null : item));
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Fruit List</h1>

        <div className="flex justify-between mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={fetchData}
          >
            Fetch Data
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={clearData}
          >
            Clear Data
          </button>
        </div>

        {isLoading ? (
          <div className="text-center">
            <div className="animate-pulse text-2xl font-bold">Loading...</div>
          </div>
        ) : (
          <TransitionGroup
            component="div"
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {data.map((fruit, index) => (
              <CSSTransition key={index} timeout={300} classNames="fade">
                <div className="bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                  <Image
                    src={fruit.image}
                    alt={fruit.name}
                    className="h-auto w-full object-cover"
                    width="200"
                    height="200"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{fruit.name}</h2>

                    <button
                      className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                      onClick={() => handleItemClick(fruit)}
                    >
                      Show Details
                    </button>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}

        {expandedItem && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="fixed top-0 left-0 right-0 bottom-0 opacity-10 bg-black"></div>
            <div className="modal bg-white shadow-lg rounded-lg p-6 max-w-md z-10">
              <div className="mb-4">
                <Image
                  src={expandedItem.image}
                  alt={expandedItem.name}
                  className="h-auto w-full object-cover"
                  width="400"
                  height="400"
                />
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                {expandedItem.name}
              </h2>
              <p className="text-gray-700">{expandedItem.price}</p>
              <p className="text-gray-700">
                Stocked: {expandedItem.stocked ? "Yes" : "No"}
              </p>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setExpandedItem(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
