import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import './PostsList.css';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('-published_at'); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${currentPage}&page[size]=${itemsPerPage}&append[]=small_image&append[]=medium_image&sort=${sortBy}`
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [currentPage, itemsPerPage, sortBy]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); 
  };

  const handleSortByChange = (newSortBy) => {
    setSortBy(newSortBy);
    setCurrentPage(1);
  };


  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="posts-list">
      <div className="posts-list__controls">
        <label htmlFor="items-per-page">Items per page:</label>
        <select
          id="items-per-page"
          value={itemsPerPage}
          onChange={(e) => handleItemsPerPageChange(parseInt(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>

        <label htmlFor="sort-by">Sort by:</label>
        <select
          id="sort-by"
          value={sortBy}
          onChange={(e) => handleSortByChange(e.target.value)}
        >
          <option value="-published_at">Newest</option>
          <option value="published_at">Oldest</option>
        </select>
      </div>

      <div className="posts-list__container">
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="posts-list__pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}

        <button
          disabled={currentPage === Math.ceil(posts.length / itemsPerPage)}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsList;