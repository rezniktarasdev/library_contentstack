import { ImStarFull } from "react-icons/im";
import './StarRating.css'



const StarRating = ({rating}) => {
  const stars = ['star', 'star', 'star', 'star', 'star'];


  return (
    <div className="star-rating-container">
      {stars.map((_, index ) => (
        <ImStarFull className={`star-rating ${index < rating ? 'filled' : ''}`} key={index} />
      ))}
    </div>
  );
};

export default StarRating;

// const StarRating = ({ rating }) => {
//   const maxStars = 5;
//   const filledStars = Math.floor(rating);

//   return (
//     <div className="star-rating-container">
//       {Array(maxStars).fill().map((_, index) => (
//         <SlStar
//           className={`star-rating ${index < filledStars ? 'filled' : ''}`}
//           key={index}
//         />
//       ))}
//     </div>
//   );
// };

// export default StarRating;