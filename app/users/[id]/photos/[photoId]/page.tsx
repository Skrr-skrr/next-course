interface Props {
  params: { id: number; photoId: number };
}

const PhotosRoute = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      PhotosRoute {id} {photoId}
    </div>
  );
};

export default PhotosRoute;
