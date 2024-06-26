import { RootState } from "../redux/store/store";
import { useSelector } from "react-redux";

export default function Heading({ title }: { title: string }) {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <h1>{count}</h1>
    </>
  );
}
