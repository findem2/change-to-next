import { Modal } from "../components/Modal";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const isModalOpen = router.query.modal === "true";

  return (
    <Layout>
      <Component {...pageProps} />
      {isModalOpen && <Modal />}
    </Layout>
  );
}
