export const ProfileRating = () => {
  return (
    <div>
      <div className="flex gap-2 mb-5">
        <p>Rating Average:</p>

        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked={false}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked={true}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked={false}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked={false}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked={false}
          />
        </div>
      </div>
      <div className="flex items-center gap-2 mb-5">
        <p>Number of Ratings:</p>
        <input type="text" placeholder="Null" className="input w-28 h-8" />
      </div>
      {/*dataRating3.map((rating) => (
              <div key={rating.id}>
                <div>Comment: {rating.comment}</div>
                <div>Rating: {rating.rating}</div>
                <div>Comment date:{rating.createdAt}</div>
              </div>
            ))*/}
    </div>
  );
};
