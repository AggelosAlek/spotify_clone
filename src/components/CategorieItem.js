import { useState } from "react";

function CategorieItem({ title, image }) {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div
      style={{
        backgroundImage: `url('${image}')`,
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="categorie_item"
    >
      {hover && <div className="categorie_title">{title}</div>}
    </div>
  );
}

export default CategorieItem;
