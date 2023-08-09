import Post from './Post';
import flowers from './assets/flower.jpg';
import mountain from './assets/mountain.jpg';
import city from './assets/city.png';

const postsData = [
  {
    id: 1,
    title: 'Flowers',
    imageSrc: flowers,
    likes: 420,
  },
  {
    id: 2,
    title: 'Mountain',
    imageSrc: mountain,
    likes: 404,
  },
  {
    id: 3,
    title: 'City',
    imageSrc: city,
    likes: 727,
  },
  // Add more posts here
];

const Home = () => {
  return (
    <div className="home">
      {postsData.map(post => (
        <Post
          key={post.id}
          title={post.title}
          imageSrc={post.imageSrc}
          likes={post.likes}
        />
      ))}
    </div>
  );
};

export default Home;
