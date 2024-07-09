// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const News = () => {
//   const [news, setNews] = useState([]);
//   const [categories, setCategories] = useState(['EV vehicles', 'Batteries', 'Charging stations', 'Tech', 'India', ' Geopolitics', 'Business', 'Startups', 'AI']);
//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get('https://newsapi.org/v2/everything', {
//           params: {
//             apiKey: 'a7fbe0490bc045db8f133cd448447e84',
//             q: selectedCategory,
//             language: 'en',
//             sortBy: 'relevancy',
//             pageSize: 10,
//           },
//         });
//         setNews(response.data.articles);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     fetchNews();
//   }, [selectedCategory]);

//   const filterNewsByCategory = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Latest News</h1>
//       <div className="mb-4">
//         <select
//           onChange={(e) => filterNewsByCategory(e.target.value)}
//           className="border border-gray-400 px-4 py-2 rounded"
//         >
//           {categories.map((category, index) => (
//             <option key={index} value={category}>{category}</option>
//           ))}
//         </select>
//       </div>
//       <ul>
//         {news.map((article) => (
//           <li key={article.url} className="mb-6">
//             <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
//             <p className="text-gray-700">{article.description}</p>
//             <a href={article.url} className="text-blue-500 hover:underline">Read More</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default News;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

const News = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([
    "EV vehicles",
    "Batteries",
    "Charging stations",
    "Tech",
    "India",
    " Geopolitics",
    "Business",
    "Startups",
    "AI",
  ]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10; // Number of articles per page

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            apiKey: "a7fbe0490bc045db8f133cd448447e84",
            q: selectedCategory,
            language: "en",
            sortBy: "relevancy",
            pageSize: pageSize,
            page: currentPage, // Add page parameter to fetch the correct page
          },
        });
        setNews(response.data.articles);
        setTotalPages(Math.ceil(response.data.totalResults / pageSize));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [selectedCategory, currentPage]); // Include currentPage in dependency array

  const filterNewsByCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Latest News</h1>
        <div className="flex flex-wrap mb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => filterNewsByCategory(category)}
              className={`mr-4 mb-2 px-4 py-2 rounded border border-gray-400 ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <ul>
          {news.map((article) => (
            <li key={article.url} className="mb-6">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700">{article.description}</p>
              <a href={article.url} className="text-blue-500 hover:underline">
                Read More
              </a>
            </li>
          ))}
        </ul>
        {totalPages > 1 && (
          <div className="pagination mt-4">
            <button
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-4 py-2 mr-2 bg-gray-300 rounded"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 ml-2 bg-gray-300 rounded"
            >
              Next
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default News;
