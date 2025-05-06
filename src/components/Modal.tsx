import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ModalProps {
  onClose: () => void;
  created_at: Date | undefined;
  slug: string;
  content: string | undefined;
  link_github: string | undefined;
  link_site: string | undefined;
  image: string | undefined;
}

const Modal = ({
  onClose,
  created_at,
  slug,
  content,
  link_github,
  link_site,
  image,
}: ModalProps) => (
  <div
    id="extra-large-modal"
    className="overlay modal bg-primary/10 opacity-100"
    role="dialog"
  >
    <div className="modal-dialog opacity-100 modal-dialog-xl">
      <div className="modal-content">
        <div className="modal-header pb-0">
          <h3 className="modal-title">{slug.toUpperCase()}</h3>
          <button
            type="button"
            className="btn btn-text btn-circle btn-sm absolute end-3 top-3"
            aria-label="Close"
            data-overlay="#extra-large-modal"
            onClick={onClose}
          >
            <span className="icon-[tabler--x] size-4"></span>
          </button>
        </div>
        <div className="pl-6">
          <p className="text-xs">
            {/* {created_at &&
              created_at?.getMonth() +
                " " +
                created_at?.getDate() +
                ", " +
                created_at?.getFullYear()} */}
          </p>
        </div>
        <div className="modal-body">
          <p>{content}</p>
        </div>
        <div className="modal-footer">
          {link_github && (
            <button type="button" className="btn btn-soft btn-secondary">
              {link_github}
            </button>
          )}
          {link_site && (
            <button type="button" className="btn btn-primary">
              {link_site}
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
);

// ADD: do some sort of api request for the modal content through portfolio-content.js
// the api has to call with portfolio-content and with a ?slug={slug} at the end
export default function ModalRoute() {
  const [data, setData] = useState<ModalProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const slug = location.pathname.split("/")[2];

  const closeModal = () => {
    navigate(-1);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/portfolio-content?slug=${slug}`);

        // disable in developer mode !!!
        // if (!res.ok) throw new Error("Not found");

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error loading modal data:", err);
        setError("Could not load modal content");
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  if (loading) return null;
  if (error) return <div>NOTHING!!!</div>;
  return data ? (
    <Modal
      onClose={closeModal}
      created_at={data?.created_at}
      slug={slug}
      content={data?.content}
      link_github={data?.link_github}
      link_site={data?.link_site}
      image={data?.image}
    />
  ) : null;
}
