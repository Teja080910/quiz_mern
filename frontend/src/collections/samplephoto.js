import React, { useState } from 'react';

const App1 = () => {
  const [images, setImages] = useState([]);
  const [likes, setLikes] = useState([]);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const uploadedImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      likes: 0,
      comments: [],
      height: '',
      width: '',
    }));

    setImages([...images, ...uploadedImages]);
  };

  const handleHeightChange = (event) => {
    setHeight(parseInt(event.target.value));
  };

  const handleWidthChange = (event) => {
    setWidth(parseInt(event.target.value));
  };

  const handleComment = (e, index) => {
    e.preventDefault();
    const comment = e.target.elements.comment.value.trim();

    if (comment) {
      const newImages = [...images];
      newImages[index].comments.push(comment);
      setImages(newImages);
      e.target.elements.comment.value = '';
    }
  };

  const handleLikes = (index) => {
    const newLikes = [...likes];
    newLikes[index] = newLikes[index] ? newLikes[index] + 1 : 1;
    setLikes(newLikes);
  };

  return (
    <div className='post'>
      <input type="file" multiple onChange={handleImageChange} />

      <div>
        <label>Width:</label>
        <input type="number" value={width} onChange={handleWidthChange} />
      </div>
      <div>
        <label>Height:</label>
        <input type="number" value={height} onChange={handleHeightChange} />
      </div>


      <button onClick={() => {
        const newImages = [...images];
        newImages.forEach((image) => {
          image.height = height;
          image.width = width;
        });
        setImages(newImages);
      }}>Apply to all</button>

      {images.map((image, index) => (
        <div key={index}>
          <img src={image.preview} alt="uploaded" style={{ height: image.height, width: image.width }} />

          <div>
              <button onClick={() => handleLikes(index)}>Likes: {likes[index] || 0}</button>
            </div>

          <div>
            <form onSubmit={(e) => handleComment(e, index)}>
              <input type="text" name="comment" />
              <button>Comment</button>
            </form>

            {image.comments.map((comment, commentIndex) => (
              <div key={commentIndex}>{comment}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App1;
