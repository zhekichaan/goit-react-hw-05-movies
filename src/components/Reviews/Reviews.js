import { useEffect, useState } from "react";
import { getMovieReviews } from "services/api";
import { useParams } from "react-router-dom";
import { Box } from "components/Box";
import { Author } from "./Reviews.styled";

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [isNotReviewed, setIsNotReviewed] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = getMovieReviews(id)
        let reviewsData = (await response).data
        setReviews(reviewsData.results)
        if(reviewsData.total_results === 0) {
          setIsNotReviewed(true)
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData().catch(console.error);
  }, [id])

  return (
    <ul>
      {isNotReviewed && <p>No reviews!</p>}
      {reviews.map(review => {
        return <Box as="li" mb="20px" key={review.id}>
          <Author>Author: {review.author} </Author>
          <p>{review.content}</p>
          </Box>
      })}
    </ul>
  );
};

export default Reviews



