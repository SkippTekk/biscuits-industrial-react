import { Helmet } from "react-helmet";

const DynamicMeta = (props) => {
  return (
    <Helmet>
      <meta property="og:url" content={props.url} />
      <meta property="og:title" content={`Skipptekk | ${props.title}`} />
      <meta property="og:description" content={props.desc} />
      <meta property="og:image" content={props.img} />
    </Helmet>
  );
};

export default DynamicMeta;
