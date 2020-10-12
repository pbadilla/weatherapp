<div className="inner">
  <div className="columns">
    {imagesLoop &&
      imagesLoop.map((image, index) => (
        <div className="image fit" key={image.id}>
          <Link
            to={`/photo/${image.id}`}
            key={image.id}
            title={image.title}
            data-alt="img03"
            data-description={`<h3>${image.title}</h3>`}
          >
            <img
              key={image.id}
              src={image.images.original.url}
              alt={image.title}
            />

            <div className="description">
              <h3>{image.title}</h3>
            </div>
          </Link>
        </div>
      ))}
  </div>
  <button onClick={handleShowMoreImages}>Load more Images</button>
</div>;

// import Home from "./containers/home";
// import Search from "./containers/search";
{
  /* <Switch>
<Route exact path="/" component={Home} />
<Route exact path="/search/" component={Search} />
<Route exact path="/search/:city" component={Search} />
</Switch> */
}

const imagesPerPage = 20;
let arrayImages = [];

const [imagesToShow, setImagesToShow] = useState([]);
const [nextPage, setNextPage] = useState(20);

const dispatch = useDispatch();

useEffect(() => {
  dispatch(getImages());
}, []);

const arrayImagesSlice = (start, end, images) => {
  const slicedImages = images.slice(start, end);
  arrayImages = [...arrayImages, ...slicedImages];
  return arrayImages;
};

const handleShowMoreImages = () => {
  arrayImagesSlice(nextPage, nextPage + imagesPerPage);
  setNextPage(nextPage + imagesPerPage);
};

(
  <ul>
    <li>
      <Card name="Barcelona" temperature="17" icon="" />
    </li>
    <li>
      <Card testId="Card-Test" name="Paris" temperature="12" icon="" />
    </li>
  </ul>
).map((city) => {
  <li>
    <ConsoleLog>{city}</ConsoleLog>
    <Card name={city.name} />
  </li>;
});

import DetailCityCard from "../../components/DetailCityCard";

import ConsoleLog from "../../components/common/utils/ConsoleLog";
