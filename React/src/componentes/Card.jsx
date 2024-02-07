import image from '../assets/star.jpg';

export const Card = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <img src={image} alt="star" style={{ maxWidth: '100%' }} />
      <div style={{ marginLeft: 10 , alignItems:'center'}}>
        <h2>Poster Star Wars</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugiat aliquam ea porro pariatur error ex.
        </p>
        <p>
          Blanditiis sit magnam reiciendis tempore doloremque accusamus aspernatur consequatur quae dicta sunt?
        </p>
        <p>Odit, quam!</p>
      </div>
    </div>
  );
};
