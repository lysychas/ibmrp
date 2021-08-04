import ImageLinkForm from "../../components/ImageLinkForm/ImageLinkForm";
import ImageQuery from "../../components/ImageQuery/ImageQuery";
import ObjectList from "../../components/ObjectList/ObjectList";
import QueryList from "../../components/QueryList/QueryList";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="homeContainer">
        <ImageLinkForm />
        <ImageQuery />
        <ObjectList />
        <QueryList />
      </div>
    </>
  );
}
