import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { push } = useRouter();
  useEffect(() => {
    push("/dashboard");
  }, []);
  return null;
}
