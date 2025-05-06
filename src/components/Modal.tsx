import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface ModalProps {
  onClose: () => void;
  created_at?: Date | undefined;
  slug: string;
  content?: string | undefined;
  link_github?: string | undefined;
  link_site?: string | undefined;
  image?: string | undefined;
}

interface ModalSkeletonProps {
  onClose: () => void;
  slug: string;
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
            {created_at &&
              created_at?.toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
          </p>
        </div>
        <div className="modal-body">
          {image && (
            <img
              src={image}
              alt={slug.toUpperCase()}
              className="mx-auto h-16"
            />
          )}
          <p>{content}</p>
        </div>
        <div className="modal-footer">
          {link_github && (
            <button type="button" className="btn btn-soft btn-secondary">
              <Link to={link_github} target="_blank">
                GitHub
              </Link>
            </button>
          )}
          {link_site && (
            <button type="button" className="btn btn-primary">
              <Link to={link_site} target="_blank">
                To site
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ModalSkeleton = ({ slug, onClose }: ModalSkeletonProps) => (
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
          <div className="skeleton skeleton-animated h-4 w-20" />
        </div>
        <div className="modal-body flex flex-col gap-2">
          <div className="skeleton skeleton-animated h-4 w-80" />
          <div className="skeleton skeleton-animated h-4 w-120" />
          <div className="skeleton skeleton-animated h-4 w-120" />
        </div>
        <div className="modal-footer">
          <div className="skeleton skeleton-animated h-[38px] w-[90px]" />
          <div className="skeleton skeleton-animated h-[38px] w-[103px]" />
        </div>
      </div>
    </div>
  </div>
);

export default function ModalRoute() {
  const [data, setData] = useState<ModalProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const slug = location.pathname.split("/")[2];

  const closeModal = () => {
    // check if the last domain was from current domain or other
    const referrer = document.referrer;
    const isSameOrigin =
      referrer && new URL(referrer).origin === window.location.origin;

    // if from current domain, send back 1 page. If not, send to origin url directory
    if (isSameOrigin) {
      navigate(-1);
    } else {
      navigate("/portfolio");
    }
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

  if (loading) return <ModalSkeleton slug={slug} onClose={closeModal} />;
  if (error) return <Modal slug={"ERROR: NOT FOUND"} onClose={closeModal} />;
  return data ? (
    <Modal
      onClose={closeModal}
      created_at={data?.created_at ? new Date(data.created_at) : undefined}
      slug={slug}
      content={data?.content}
      link_github={data?.link_github}
      link_site={data?.link_site}
      image={data?.image}
    />
  ) : null;
}
