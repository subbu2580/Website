import { useState, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import "./website.css";

const Website = () => {
  const [activeItem, setActiveItem] = useState(null);
  const imageRefs = useRef([]);
  const handleMouseEnter = (id) => {
    setActiveItem(id);
    const imageElement = imageRefs.current[id];
    if (imageElement) {
      imageElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const imageItems = [
    {
      id: 1,
      image:
        "https://i.ytimg.com/vi/u71QsZvObHs/maxresdefault.jpg",
      title: "Beautiful Landscape",
    },
    {
      id: 2,
      image:
        "https://static.toiimg.com/thumb/109268432/109268432.jpg?height=746&width=420&resizemode=76&imgsize=141912",
      title: "Mountain View",
    },
    {
      id: 3,
      image:
        "https://uni-blog.s3.amazonaws.com/2/0e94c237-65b2-41b4-b5ca-a726e7cfcb22/jaya092022-01-10T11-45-40-151448.jpg",
      title: "City Lights",
    },
  ];

  return (
    <div>
      <div>
        <h2 style={{ marginLeft: "50px" }}>WHY choose You are a sunflower?</h2>
      </div>
      <div className="image-reveal">
        <div className="content-grid">
          <div className="text-column">
            {imageItems.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => handleMouseEnter(item.id)}
                className="text-item"
              >
                <div className="title-icon-row">
                  <h2 className={`item-title ${activeItem === item.id ? 'active' : ''}`}>{item.title}</h2>
                  <div className="arrow-container">
                    <GoArrowUpRight className="arrow-icon" />
                  </div>
                </div>
                <div className="divider"></div>
              </div>
            ))}
          </div>

          <div className="image-scroll-container">
            {imageItems.map((item) => (
              <div
                key={item.id}
                ref={(el) => (imageRefs.current[item.id] = el)}
                className={` ${activeItem === item.id ? "active" : ""}`}
              >
                <img src={item.image} alt={item.title} className="image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website
