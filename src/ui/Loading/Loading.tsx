import Image from "next/image";

export default function Loading() {
  return (
  <p className="p-2">
    <Image src={'/main/loadingInfinity.svg'} width={150} height={150} alt="loading"></Image>
  </p>
  );
}
