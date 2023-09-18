import "./styles.css";
import data from "./sample_news_stories.json";
const stories = data.results;

export default function App() {
  return (
    <div className="contentContainer">
      <h1>My News Story</h1>
      <div className="storiesContainer">
        <Story
          title={stories[0].title}
          creator={stories[0].creator}
          description={stories[0].description}
          img={stories[0].image_url}
          link={stories[0].link}
        />
        <Story
          title={stories[1].title}
          creator={stories[1].creator}
          description={stories[1].description}
          img={stories[1].image_url}
          link={stories[1].link}
        />
        <Story
          title={stories[2].title}
          creator={stories[2].creator}
          description={stories[2].description}
          img={stories[2].image_url}
          link={stories[2].link}
        />
        <Story
          title={stories[3].title}
          creator={stories[3].creator}
          description={stories[3].description}
          full_description={stories[3].full_description}
          img={stories[3].image_url}
          link={stories[3].link}
        />
      </div>
    </div>
  );
}

function Story(props) {
  let images;
  let desc;

  if (props.img == null) {
    images = "https://placehold.co/600x400?text=News+Story";
  } else {
    images = props.img;
  }

  if (props.description == null) {
    desc = props.full_description.slice(0, 105) + " ...";
  } else {
    desc = props.description.slice(0, 105) + " ...";
  }

  return (
    <div className="storyContainer">
      <div className="imgContainer">
        <img src={images} alt="" />
      </div>
      <div className="storyText">
        <a href={props.link}>{props.title}</a>
        <h3>{props.creator}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
