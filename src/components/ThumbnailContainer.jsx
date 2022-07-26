import styled from "styled-components";
import Thumbnail from "./Thumbnail";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 2rem;
  max-width: 445px;
`;

const ThumbnailContainer = ({ images, active, selectImage }) => {
  return (
    <Container>
      {images.map((image) => {
        return (
          <Thumbnail
            key={image.id}
            image={image}
            active={active}
            selectImage={(e) => {
              if (e.key === "Enter" || e.type === "click") {
                selectImage(image.id);
              }
            }}
          />
        );
      })}
    </Container>
  );
};

export default ThumbnailContainer;
