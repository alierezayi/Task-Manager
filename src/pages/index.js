import { useRouter } from "next/router";

import { useEffect } from "react";

export default function Home() {
  const { push } = useRouter();
  useEffect(() => {
    push("/register");
  }, []);
  return (
    <>
      <div>Home Page</div>
    </>
  );
}
