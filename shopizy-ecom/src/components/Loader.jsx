import { LoaderWrapper, Spinner, LoadingText } from "../styles/LoadingStyle";
/**
 * Loader component that displays a loading spinner and message.
 * It is typically used to indicate that data is being fetched or processed.
 */
export default function Loader() {
  return (
    <LoaderWrapper>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </LoaderWrapper>
  );
}