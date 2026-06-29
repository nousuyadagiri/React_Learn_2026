import { useOptimistic } from "react";

//  Allows you to immediately update the UI with an expected result during async operations (like updating a database), automatically rolling back if the request fails.

// const UseOptimistic = () => {
//   const [optimisticLikes, setOptimisticLikes] = useOptimistic(
//     initialLikes,
//     (current, newLikeCount) => newLikeCount,
//   );

//   async function handleLike() {
//     setOptimisticLikes(optimisticLikes + 1);
//     // Async server action
//     await onLike();
//   }

//   return (
//     <div>
//       <button onClick={handleLike}>Likes: {optimisticLikes}</button>
//     </div>
//   );
// };

const UseOptimisticPage = () => {
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    0,
    (currentLikes, increment) => currentLikes + increment,
  );

  async function handleLike() {
    // Update UI immediately
    setOptimisticLikes(1);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Like saved to server");
    } catch (error) {
      console.error("Failed to save like");
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <button
        className="px-4 py-2 bg-white text-black! rounded-xl"
        onClick={handleLike}
      >
        Likes: {optimisticLikes}
      </button>
    </div>
  );
};

export default UseOptimisticPage;
